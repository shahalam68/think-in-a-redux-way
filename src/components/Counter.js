import { connect } from "react-redux";

 function Counter() {

    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {

}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);