// Write your JS code here
import './index.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

const CryptocurrenciesList = props => {
  const {cryptoCurrencyData} = props
  return (
    <div className="crypto-container">
      <div className="bg-container">
        <h1 className="crypto-heading">Coin Type</h1>

        <h1 className="crypto-heading">USD</h1>

        <h1 className="crypto-heading">EURO</h1>
      </div>
      <ul className="styling">
        {cryptoCurrencyData.map(eachItem => (
          <CryptocurrencyItem currencyData={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  )
}

export default CryptocurrenciesList
