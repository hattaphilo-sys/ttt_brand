'use server';

import { supabase } from '@/lib/supabase';

type ApplyFormData = {
  name: string;
  email: string;
  message: string;
};

export async function submitApplication(data: ApplyFormData) {
  if (!data.name || !data.email || !data.message) {
    return { success: false, error: '全ての項目を入力してください。' };
  }

  try {
    const { error } = await supabase
      .from('applications')
      .insert([
        {
          name: data.name,
          email: data.email,
          message: data.message,
          created_at: new Date().toISOString(),
        },
      ]);

    if (error) {
      throw new Error('データの保存に失敗しました。');
    }

    return { success: true };
  } catch {
    return { success: false, error: 'サーバーエラーが発生しました。' };
  }
}
