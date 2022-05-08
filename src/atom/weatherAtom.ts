import {atom} from 'recoil'
import {WeatherAPI} from "../common/apis/fakeDB";

let today = new Date().toLocaleDateString();

const MokeDbDataGangdong: WeatherAPI = {
    areaName: '강동구',
    bgImage: 'https://static.forceteller.com/images/weather/bg/spring_day_foggy_cool.jpg',
    daily: {
        findDust: '보통',
        icon: 'https://static.forceteller.com/images/weather/icons/icon_day_foggy.png',
        temp: '21',
        tempMax: '24',
        tempMin: '17',
        title: '흐림',
        ultraFineDust: '좋음',
    },
    hourly: {
        announceTime: `케이웨더 제공 ${today}`,
        hours: [
            {
                time: 15,
                temp: "21",
                icon: "https://static.forceteller.com/images/weather/icons/icon_day_foggy.png",
            },
            {
                time: 18,
                temp: "24",
                icon: "https://static.forceteller.com/images/weather/icons/icon_day_foggy.png"
            }]
    },
    isDark: false,
    subTitle: "조심조심!",
    title: "비가 올지도 몰라요!"
}

export const weatherState = atom<WeatherAPI[]>({
    key: 'weatherState',
    default: [MokeDbDataGangdong],
});

export const areaState = atom({
    key: 'areaState',
    default: '강동구'
})