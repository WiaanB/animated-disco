export function truncateText(text: string, length?: number) {
    if (text.length > (length ?? 50)) return text.substring(0, (length ?? 50)) + '...';
    return text;
}