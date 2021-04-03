import React from 'react';
// import AvalonLogo from '../../../public/assets/img/avalon-logo.png'
import { initListeners } from '../Socker/init.Listeners'

class Home extends React.Component {
    onClickJoin = () => {
        initListeners()
    }

    renderFireflies = (flyfliesQty) => {
        let fireflies = []
        for (let i = 0; i < flyfliesQty; i++) {
            fireflies.push(<div className="firefly"></div>)
        }
        return fireflies
    }

    render() {
        return (
            <div className="font-sans layout-bg firefly-container">
                {this.renderFireflies(10)}
                <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
                    <div className="w-full sm:max-w-sm rounded-md bg-white shadow-lg p-5 pb-10 text-gray-800">
                        <div className="flex container-sm px-4 items-center content-center">
                            <img className="" src="../../../assets/img/avalon-logo.png"></img>
                        </div>
                        <div className="flex mt-5 items-center text-center">
                            <hr className="border-gray-300 border-1 w-full rounded-md"/>
                            <label className="block font-medium text-sm text-gray-700 w-full">
                                Create Game
                            </label>
                            <hr className="border-gray-300 border-1 w-full rounded-md"/>
                        </div>
                        <div className="flex mt-5 justify-center w-full">
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                Create Room
                            </button>
                        </div>
                        <div className="flex mt-5 items-center text-center">
                            <hr className="border-gray-300 border-1 w-full rounded-md"/>
                            <label className="block font-medium text-sm text-gray-700 w-full">
                                Join Game
                            </label>
                            <hr className="border-gray-300 border-1 w-full rounded-md"/>
                        </div>
                        <div className="flex mt-5 justify-center w-full">
                            <div className="pr-3">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" placeholder="ex: fm2r"/>
                            </div>
                            {/* <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                Join
                            </button> */}

                            <button className="bg-red-500 border-none px-4 py-2 rounded-md cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                Join
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;