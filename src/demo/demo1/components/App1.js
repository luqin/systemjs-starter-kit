import React from 'react';

import {Car} from '../car';

let car = new Car({
    price: 30000, make: 'Chevy', model: 'Malibu',
    year: 2014, isElectric: false, isHatchback: false
});

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            truck: null
        };
    }

    componentDidMount() {
        setTimeout(()=> {
            // FIXME ???
            System.import('demo/truck')
                .then(m => {
                    let {Truck} = m;

                    let truck = new Truck({
                        price: 40000, make: 'Ford', model: 'F150',
                        year: 2014, is4by4: true
                    });

                    this.setState({
                        truck
                    });
                });
        }, 2000);
    }

    render() {
        let {truck} = this.state;

        let e;
        if (truck) {
            e = (
                <div>
                    {truck.getDetails() }
                    <br/>Truck total: {truck.getTotal(.08) }
                </div>
            );
        } else {
            e = (
                <div>loading...</div>
            )
        }

        return (
            <div>
                <br/>{car.getDetails() }
                <br/>Car total: {car.getTotal(.08) }
                <br/><br />
                {e}
            </div>
        );
    }
}

export default App;
