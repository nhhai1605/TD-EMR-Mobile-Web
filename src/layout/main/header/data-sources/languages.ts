import usaFlag from 'assets/flags/usa.png'
import vnFlag from 'assets/flags/vi.png'

export const languageOptions: {
    [key: string]: { icon: string; label: string };
} = {
    en: {
        icon: usaFlag,
        label: "English",
    },
    vi: {
        icon: vnFlag,
        label: "Vietnam",
    },
};