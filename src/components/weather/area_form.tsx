import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";

export const AreaForm = () => {
    const {register, handleSubmit, watch} = useForm();
    const [areaState, setAreaState] = useState('');
    const onSubmit = (data: any) => {
        console.log(data)
    }
    useEffect(() => {
        setAreaState(watch('area'))
        console.log(areaState, 'areaState')
    }, [watch('area')])
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input {...register('area')} type="text" placeholder="지역 이름으로 검색하세요."/>
                    <input type='submit' placeholder='submit'/>
                </div>
            </form>
        </div>)
}