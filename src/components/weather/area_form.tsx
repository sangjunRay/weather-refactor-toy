import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import styled from "styled-components";
import {useRecoilState} from "recoil";
import {MockAreaFakeDB, searchAreaState} from "../../atom/areaAtom";
import {AreaArray} from "../../common/apis/fakeDB";

const HookForm = styled.form`
  width: 90%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const InputBox = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 10px;
  justify-content: space-between;
`

const AreaInput = styled.input`
  all: unset;
  padding: 0.8rem;
  font-weight: 600;
`

export const AreaForm = () => {
    const {register, handleSubmit, watch} = useForm();
    const [areaState, setAreaState] = useState('');
    const [area, setArea] = useRecoilState(searchAreaState);
    const onSubmit = (data: any) => {
            setArea(MockAreaFakeDB.filter((MockAreaFakeDB) => MockAreaFakeDB.city?.includes(data.area)))
    }
    useEffect(() => {
        setAreaState(watch('area'))
    }, [areaState,setArea])

    return (
        <HookForm onSubmit={handleSubmit(onSubmit)}>
            <InputBox>
                <AreaInput {...register('area')} type="text" placeholder="지역 이름으로 검색하세요." autoComplete='off'/>
                <AreaInput type='submit' value='🔍'/>
            </InputBox>
        </HookForm>)
}