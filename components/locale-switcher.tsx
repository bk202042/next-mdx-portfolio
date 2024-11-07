'use client';

import { useLocale } from 'next-intl';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function LocaleSwitcher() {
  const locale = useLocale();

  const onSelectChange = (newLocale: string) => {
    document.cookie = `locale=${newLocale};path=/;max-age=31536000`;
    window.location.reload();
  };

  return (
    <Select defaultValue={locale} onValueChange={onSelectChange}>
      <SelectTrigger className="w-[70px]">
        <SelectValue placeholder={locale.toUpperCase()} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ko">KO</SelectItem>
        <SelectItem value="en">EN</SelectItem>
      </SelectContent>
    </Select>
  );
}
