import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    cryptoData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptoCurrency()
  }

  getCryptoCurrency = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const updatedCurrency = data.map(eachData => ({
      id: eachData.id,
      currencyLogo: eachData.currency_logo,
      currencyName: eachData.currency_name,
      euroValue: eachData.euro_value,
      usdValue: eachData.usd_value,
    }))
    this.setState({cryptoData: updatedCurrency, isLoading: false})
  }

  render() {
    const {cryptoData, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div className="loader" testid="loader">
            <Loader type="Rings" color="white" height={80} width={80} />
          </div>
        ) : (
          <div className="currency-container">
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
            />
            <CryptocurrenciesList cryptoCurrencyData={cryptoData} />
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
