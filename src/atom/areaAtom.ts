import {atom} from 'recoil'
import {Area} from "../common/apis/fakeDB";

export const areaState = atom<Area>({
    key: 'areaState',
    default: {city: '서울특별시', gu: '강동구', dong: '암사동'}
})

export const areaHidden = atom({
    key: 'areaHidden',
    default: true
})