import { fetchAllCountries } from "@/api/countries";
import { useQuery } from "@tanstack/react-query";

export default function useCountries() {
    return useQuery({ queryKey: ["countries"], queryFn: fetchAllCountries, staleTime: Infinity, gcTime: Infinity, retry: false, refetchOnWindowFocus: false })
}