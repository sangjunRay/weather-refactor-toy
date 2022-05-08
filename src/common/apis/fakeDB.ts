interface HoursInterface {
    time: number;
    temp: string;
    icon: string;
}

interface HourArrayInterface extends Array<HoursInterface>{}

export interface WeatherAPI {
    areaName: string;
    bgImage: string;
    daily: {
        findDust: string;
        icon: string;
        temp: string;
        tempMax: string;
        tempMin: string;
        title: string;
        ultraFineDust: string;
    }
    hourly: {
        announceTime: string;
        hours: HourArrayInterface
    }
    isDark: boolean;
    subTitle: string;
    title: string;
}

export interface Area {
    city: string,
    gu: string,
    dong: string,
}