import React, { Component } from 'react';

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sorting: 'ascending',
            cars: [
                {
                    "manufacturer": "Toyota",
                    "model": "Rav4",
                    "year": 2008,
                    "stock": 3,
                    "price": 8500
                },
                {
                    "manufacturer": "Toyota",
                    "model": "Camry",
                    "year": 2009,
                    "stock": 2,
                    "price": 6500
                },
                {
                    "manufacturer": "Toyota",
                    "model": "Tacoma",
                    "year": 2016,
                    "stock": 1,
                    "price": 22000
                },
                {
                    "manufacturer": "BMW",
                    "model": "i3",
                    "year": 2012,
                    "stock": 5,
                    "price": 12000
                },
                {
                    "manufacturer": "Chevy",
                    "model": "Malibu",
                    "year": 2015,
                    "stock": 2,
                    "price": 10000
                },
                {
                    "manufacturer": "Honda",
                    "model": "Accord",
                    "year": 2013,
                    "stock": 1,
                    "price": 9000
                },
                {
                    "manufacturer": "Hyundai",
                    "model": "Elantra",
                    "year": 2013,
                    "stock": 2,
                    "price": 7000
                },
                {
                    "manufacturer": "Chevy",
                    "model": "Cruze",
                    "year": 2012,
                    "stock": 2,
                    "price": 5500
                },
                {
                    "manufacturer": "Dodge",
                    "model": "Charger",
                    "year": 2013,
                    "stock": 2,
                    "price": 16000
                },
                {
                    "manufacturer": "Ford",
                    "model": "Mustang",
                    "year": 2009,
                    "stock": 1,
                    "price": 8000
                },
            ]
        }
    }

    incrementValue(car) {
        let found = this.state.cars.indexOf(car);
        let cars = this.state.cars;
        cars[found].stock += 1;
        this.setState({cars: cars});
    }

    toggleSort() {
        let cars = this.state.cars;
        if (this.state.sorting === 'ascending') {
            cars.sort(function(a, b) { return b.year - a.year });
            this.setState({sorting: 'descending', cars: cars});
        } else {
            cars.sort(function(a, b) { return a.year - b.year });
            this.setState({sorting: 'ascending', cars: cars});
        }
    }

    renderTableHeader() {
        return (
            <tr>
                <th>Manufacturer</th>
                <th>Model</th>
                <th onClick={() => this.toggleSort()}>Year</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Options</th>
            </tr>
        )
     }

    renderTableData() {
        return this.state.cars.map((car, index) => {
            const { manufacturer, model, year, stock, price } = car
            return (
                <tr key={index}>
                    <td>{manufacturer}</td>
                    <td>{model}</td>
                    <td>{year}</td>
                    <td>{stock}</td>
                    <td>${price}.00</td>
                    <button onClick={() => this.incrementValue(car)}>
                        Increment
                    </button>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <table id='cars'>
                    <tbody>
                        {this.renderTableHeader()}
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}
 
 export default Table