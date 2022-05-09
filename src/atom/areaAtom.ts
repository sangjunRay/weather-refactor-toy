import {atom} from 'recoil'
import {Area, AreaArray} from "../common/apis/fakeDB";

export const MockAreaFakeDB: AreaArray = [
    {
        city: '서울특별시',
        gu: '강동구',
        dong: '천호동'
    },
    {
        city: '성남시',
        gu: '분당구',
        dong: null
    },
    {
        city: '서울특별시',
        gu: '관악구',
        dong: null
    },
    {
        city: '수원시',
        gu: '팔달구',
        dong: '이의동'
    },]

export const areaState = atom<Area>({
    key: 'areaState',
    default: {city: '서울특별시', gu: '강동구', dong: '암사동'}
})

export const areaHidden = atom({
    key: 'areaHidden',
    default: true
})

export const searchAreaState = atom<AreaArray>({
    key: 'searchArea',
    default: [{city: null, dong: null, gu: null}],
})