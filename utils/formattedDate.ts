export function formatDateTime(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
    };
  
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }