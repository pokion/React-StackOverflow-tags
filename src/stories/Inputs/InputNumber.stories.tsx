import InputNumberComponent from "../../components/InputNumberComponent"

export default {
    title: "Input/Input Number",
    component: InputNumberComponent
}

const dummyHandler = ()=>{}

export const InputNumber = () => <InputNumberComponent valueMax={10} handleChangeInput={dummyHandler} />