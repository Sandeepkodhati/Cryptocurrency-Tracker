// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyData} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = currencyData
  return (
    <li className="styling-2">
      <div className="row-styling">
        <img src={currencyLogo} className="currency-image" alt={currencyName} />
        <p className="currency-description">{currencyName}</p>
      </div>
      <p className="custom-description"> {usdValue}</p>
      <p className="custom-description">{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
