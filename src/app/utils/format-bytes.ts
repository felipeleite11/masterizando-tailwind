export function formatBytes(bytes: number) {
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB']

    if (bytes === 0) return '0 B'

    const i = Number(Math.floor(Math.log(bytes) / Math.log(1024)))

    return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i]
}