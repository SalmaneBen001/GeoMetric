export async function getJson<T>(url: string, options: RequestInit = {}): Promise<T> {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(`Request failed: ${response.status} ${response.statusText}`);
    const data = await response.json();
    return data as T;
}