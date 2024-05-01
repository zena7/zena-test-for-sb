<script>
  let index = null;
  let inputFrom = '';
  let inputTo = '';
  const countries = Object.keys({
      'USD': 1,
      'EUR':0.93430786,
      'GBP':0.80049163,
      'RUB':91.96710316,
      'CAD':1.36637995,
      'AED': 3.6725,
      'AFN':72.20206439,
      'ALL':94.16939569,
      'AMD':390.85496755,
      'ANG':1.79,
      'AOA':844.84941484,
      'ARS':864.75,
      'AUD':1.53022216,
      'AWG':1.79,
      'AZN':1.70030017,
      'BAM':1.82734093,
      'BBD':2,
      'BDT':109.73730814,
      'BGN':1.8272193,
      'BHD':0.376,
      'BIF':2858.63457715,
      'BMD':1,
      'BND':1.36165487,
      'BOB':6.92491427,
      'BRL':5.1571127,
      'BD':1,
      'BTN':83.38889674,
      'BWP':13.82781851,
      'BYN':3.25501411,
      'BZD':2,
      'CDF':2754.66808033,
      'CHF':0.91360853,
      'CLP':950.06635176,
      'CNY':7.25862504,
      'COP':3934.46253803,
      'CRC':501.70745495,
      'CU':24,
      'CVE':103.02109491,
      'CZK':23.43126551,
      'DJF':177.721,
      'DKK':6.97227802,
      'DOP':58.74823852,
      'DZD':134.52321439,
      'EGP':47.8970466,
      'ER':15,
      'ETB':57.00414668,
      'FJD':2.27156987,
      'FKP':0.80048904,
      'FOK':6.97227693,
      'GEL':2.68195742,
      'GGP':0.80048904,
      'GHS':13.56769064,
      'GIP':0.80048904,
      'GMD':65.36880186,
      'GNF':8586.68808908,
      'GTQ':7.77497333,
      'GYD':209.26666661,
      'HKD':7.82835095,
      'HNL':24.71011859,
      'HRK':7.03951789,
      'HTG':132.40722383,
      'HUF':366.63325267,
      'IDR':16224.35946695,
      'ILS':3.80296244,
      'IMP':0.80048904,
      'INR':83.38894564,
      'IQD':1309.88524017,
      'IRR':42091.051824,
      'ISK':140.00880743,
      'JEP':0.80048904,
      'JMD':156.21238092,
      'JOD':0.709,
      'JPY':157.424713,
      'KES':134.1711096,
      'KGS':89.15650873,
      'KHR':4053.70912508,
      'KID':1.5302203,
      'KMF':459.64772381,
      'KRW':1376.16439507,
      'KWD':0.30804455,
      'KYD':0.833333,
      'KZT':443.92122277,
      'LAK':21659.2155665,
      'LBP':89500,
      'LKR':295.99984217,
      'LRD':193.42773071,
      'LSL':18.81359417,
      'LYD':4.88097037,
      'MAD':10.13827569,
      'MDL':17.84170961,
      'MGA':4423.2495995,
      'MKD':57.41839361,
      'MMK':2102.15700964,
      'MNT':3362.78773518,
      'MOP':8.06320144,
      'MRU':39.72095093,
      'MUR':46.40740698,
      'MVR':15.4507354,
      'MWK':1745.27782586,
      'MXN':17.17406721,
      'MYR':4.77323933,
      'MZN':63.98760822,
      'NAD':18.81359417,
      'NGN':1231.47630013,
      'NIO':36.80181276,
      'NOK':11.02667597,
      'NPR':133.42223479,
      'NZD':1.68272076,
      'OMR':0.384497,
      'PB':1,
      'PEN':3.74816272,
      'PGK':3.80419734,
      'PHP':57.73205088,
      'PKR':278.75583268,
      'PLN':4.03116952,
      'PYG':7454.68154948,
      'QAR':3.64,
      'RON':4.64094339,
      'RSD':109.29902502,
      'RWF':1306.37153388,
      'SAR':3.75,
      'SBD':8.39156487,
      'SCR':13.72362724,
      'SDG':509.66678854,
      'SEK':10.93632034,
      'SGD':1.36165575,
      'SHP':0.80048904,
      'SLE':22.65716403,
      'SLL':22657.16404664,
      'SOS':571.83557501,
      'SRD':34.41396069,
      'SSP':1596.32245345,
      'STN':22.8904623,
      'SYP':12927.4986468,
      'SZL':18.81359417,
      'THB':37.00664642,
      'TJS':10.93006777,
      'TMT':3.50021245,
      'TND':3.14653652,
      'TOP':2.35168709,
      'TRY':32.50636034,
      'TTD':6.77778521,
      'TVD':1.5302203,
      'TWD':32.59727772,
      'TZS':2563.80687228,
      'UAH':39.60608524,
      'UGX':3810.6531492,
      'UD':1,
      'UYU':38.40763454,
      'UZS':12697.32726695,
      'VES':36.4324,
      'VND':25304.27397789,
      'VUV':121.66870052,
      'WST':2.76597041,
      'XAF':612.86363175,
      'XCD':2.7,
      'XDR':0.75778592,
      'XOF':612.86363175,
      'XPF':111.49243457,
      'YER':250.30866423,
      'ZAR':18.81379625,
      'ZMW':26.41616015,
      'ZWL':13.4218
  });
  const selectedCountry = {
    convertFrom:'USD',
    convertTo:'RUB',
  };

  function getData(currencyOne, currencyTwo ) {
    const API_KEY = 'a53ef705e070b3b5c1dc11dc'
    return fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${currencyOne}/${currencyTwo}`)
    .then(response => response.json())
    .then(data => {
        index = Number(data.conversion_rate)

        return (data.conversion_rate)
      }).catch(error=>{
        console.log(error.name);
      })
  };

getData(selectedCountry.convertFrom, selectedCountry.convertTo);

const roundUp = (numb, index) =>  Math.round((numb * index) * 100) / 100;

function changeHandle(event){
 const [errorMessageFrom, errorMessageTo ] = document.querySelectorAll('.inputNaN');
 let value = event.target.value;
 const showOrHiddenError = (elem, act) => elem.style.display = `${act}`;

 if (isNaN(value) || value < 0){
   event.target.name === 'inputConvertFrom' ? showOrHiddenError(errorMessageFrom,'block') : showOrHiddenError(errorMessageTo,'block');
 } else {
   if (event.target.name === 'inputConvertFrom') {
   showOrHiddenError(errorMessageFrom,'none');
   inputTo = roundUp(value, index);
 } else {
   showOrHiddenError(errorMessageTo,'none');
   inputFrom = roundUp(value, 1 / index );
 }
 }
};

function handleSelect(event){
  let selectedValue = event.target?.value ?? '';
  let prevInd = index;

  if (event.target.name === 'convertFrom') {
    selectedCountry.convertFrom = selectedValue;
    getData(selectedValue, selectedCountry.convertTo)
    .then((data)=>{
      inputTo = roundUp(inputTo/prevInd, index)
    })
  } else {
    selectedCountry.convertTo = selectedValue;
    getData(selectedCountry.convertFrom, selectedValue)
    .then((data)=>{
      inputFrom = roundUp(inputFrom * prevInd, (1/index));
    })
  }
}
</script>

<main>
  <h1>Currency Converter</h1>
  <div class='converter'>
    <div class='blockFrom'>
      <label for='country-select-from'>From</label>
      <select name='convertFrom' id='country-select-from' on:change={ handleSelect} >
        {#each countries as country}
          <option value={country}>
            {country}
          </option>
        {/each}
      </select>
      <input type='text' name='inputConvertFrom' class ='inputFrom' on:input={changeHandle} value={ !!inputFrom  ? inputFrom : ''} >
      <p class='inputNaN'>Please enter a valid amount</p>
    </div>

    <div class='blockTo'>
      <label for='country-select-to'>To</label>
      <select name='convertTo' id='country-select-to' on:change={ handleSelect}>
          {#each [...countries.slice(3), ...countries.slice(0,3)] as country}
            <option value={country}>
              {country}
            </option>
          {/each}
      </select>
      <input type='text'  name='inputConvertTo' class ='inputTo' on:input={changeHandle} value={ !!inputTo  ? inputTo : ''} >
      <p class='inputNaN'>Please enter a valid amount</p>
    </div>
  </div>
    <div class='info-convert-index'>
      <p>Indicative Exchange Rate</p>
      {#if index }
        <p>1 {selectedCountry.convertFrom} = {index} {selectedCountry.convertTo}</p>
      {:else }
        <p>Loading...</p>
      {/if}
    </div>
</main>

<style>
main {
  position: relative;
}
.converter {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
  font-size: 1.6rem;
  margin-top: 7%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10%;

  }

  select {
  width: 25%;
  padding: 0 4%;
  border: 2px solid rgb(107,160,249);
  border-radius:5px;
  margin-right: 1.5%;
  font-size: 1.1rem;
  font-weight: 600;
}

input {
  border: 2px solid rgb(221, 221, 221);
  border-radius:5px;
  width: 50%;
  height: 2.8rem;
  font-size: 1.3rem;
  font-weight: 500;
  padding-left:  3%;
}

  .converter div {
    width: 50%;
  }

  .blockFrom, .blockTo {
    position: relative;
    display: flex;
  }

  label {
    position: absolute;
    top: -104%;
  font-size: 1.8rem;
  font-weight: 700;


  }

  .inputNaN {
    display:none;
    position: absolute;
    color:rgb(179, 0, 33);
    font-size: 1.2rem;
    top: 80%
  }

  .info-convert-index {
    padding-top: 5%;
    text-align: left;
    padding-left: 20%;
    font-size: 1.4rem;
  }

  .info-convert-index p {
    margin: 0 0;
  }

  .info-convert-index p:last-child{
    font-weight: 700;
  }

  .loader{
    display: none;
  }
</style>
