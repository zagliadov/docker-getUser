import React from 'react';
// import { useForm } from 'react-hook-form';

// import {
//     getTotalNumbersOfCars,
//     getTotalNumbersOfCarsByModels,
//     getSalesAmountByModel,
//     getSalesAmountByBrands,
//     getMostProfitableModels,
//     getModelOrder,
//     resetMessage,
// } from '../../store/carsSlice';


const Home = () => {
    // const message = useSelector(state => {
    //     if (state.data?.message?.length > 0) return state.data?.message
    // })
    // const { register, handleSubmit, reset } = useForm();
    // const dispatch = useDispatch();


    // const modelOrder = data => {
    //     dispatch(getModelOrder(data))
    //     reset(data.car)
    //     setTimeout(() => {
    //         reset(message)
    //         dispatch(resetMessage(''))
    //     }, 2000)
    // };





    return (
        // <div className={classes.root}>
        //     <button onClick={() => dispatch(getTotalNumbersOfCars())}>The total number of cars sold by the plant</button>
        //     <button onClick={() => dispatch(getTotalNumbersOfCarsByModels())}>Number of cars sold by the plant by model</button>
        //     <button onClick={() => dispatch(getSalesAmountByModel())}>Sales amount by model</button>
        //     <button onClick={() => dispatch(getSalesAmountByBrands())}>Sales amount by brands</button>
        //     <button onClick={() => dispatch(getMostProfitableModels())}>The most profitable models</button>

        //     <form onSubmit={handleSubmit(modelOrder)}>
        //         <input type='text' defaultValue={message} {...register("car", { required: true })} />
        //         <input type='submit' />
        //     </form>
        // </div>
        <div>Home</div>
    );
};

export default Home;