export const IS_DEV = process.env.NODE_ENV === 'development';

const MAINNET = [
    { "AAVE / ETH": "0x6Df09E975c830ECae5bd4eD9d90f3A95a4f88012" },
    { "ADA / USD": "0xAE48c91dF1fE419994FFDa27da09D5aC69c30f55" },
    { "ADX / USD": "0x231e764B44b2C1b7Ca171fa8021A24ed520Cde10" },
    { "AUD / USD": "0x77F9710E7d0A19669A13c055F62cd80d313dF022" },
    { "BAT / ETH": "0x0d16d4528239e9ee52fa531af613AcdB23D88c94" },
    { "BCH / USD": "0x9F0F69428F923D6c95B781F89E165C9b2df9789D" },
    { "BNB / USD": "0x14e613AC84a31f709eadbdF89C6CC390fDc9540A" },
    { "BNT / ETH": "0xCf61d1841B178fe82C8895fe60c2EDDa08314416" },
    { "BTC / ARS": "0xA912dd6b62B1C978e205B86994E057B1b494D73a" },
    { "BTC / ETH": "0xdeb288F737066589598e9214E782fa5A8eD689e8" },
    { "BTC / USD": "0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c" },
    { "BUSD / ETH": "0x614715d2Af89E6EC99A233818275142cE88d1Cfd" },
    { "BZRX / ETH": "0x8f7C7181Ed1a2BA41cfC3f5d064eF91b67daef66" },
    { "CHF / USD": "0x449d117117838fFA61263B61dA6301AA2a88B13A" },
    { "COMP / ETH": "0x1B39Ee86Ec5979ba5C322b826B3ECb8C79991699" },
    { "COMP / USD": "0xdbd020CAeF83eFd542f4De03e3cF0C28A4428bd5" },
    { "CRO / ETH": "0xcA696a9Eb93b81ADFE6435759A29aB4cf2991A96" },
    { "DAI / ETH": "0x773616E4d11A78F511299002da57A0a94577F1f4" },
    { "DAI / USD": "0xAed0c38402a5d19df6E4c03F4E2DceD6e29c1ee9" },
    { "DASH / USD": "0xFb0cADFEa136E9E343cfb55B863a6Df8348ab912" },
    { "DMG / ETH": "0xD010e899f7ab723AC93f825cDC5Aa057669557c2" },
    { "ENJ / ETH": "0x24D9aB51950F3d62E9144fdC2f3135DAA6Ce8D1B" },
    { "EOS / USD": "0x10a43289895eAff840E8d45995BBa89f9115ECEe" },
    { "ETC / USD": "0xaEA2808407B7319A31A383B6F8B60f04BCa23cE2" },
    { "ETH / USD": "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419" },
    { "ETH / XDR": "0xb022E2970b3501d8d83eD07912330d178543C1eB" },
    { "EUR / USD": "0xb49f677943BC038e9857d61E7d053CaA2C1734C1" },
    { "FNX / USD": "0x80070f7151BdDbbB1361937ad4839317af99AE6c" },
    { "FTSE / GBP": "0xE23FA0e8dd05D6f66a6e8c98cab2d9AE82A7550c" },
    { "Fast Gas / Gwei": "0x169E633A2D1E6c10dD91238Ba11c4A708dfEF37C" },
    { "GBP / USD": "0x5c0Ab2d9b5a7ed9f470386e82BB36A3613cDd4b5" },
    { "JPY / USD": "0xBcE206caE7f0ec07b545EddE332A47C2F75bbeb3" },
    { "KNC / ETH": "0x656c0544eF4C98A6a98491833A89204Abb045d6b" },
    { "KNC / USD": "0xf8fF43E991A81e6eC886a3D281A2C6cC19aE70Fc" },
    { "LINK / ETH": "0xDC530D9457755926550b59e8ECcdaE7624181557" },
    { "LINK / USD": "0x2c1d072e956AFFC0D435Cb7AC38EF18d24d9127c" },
    { "LRC / ETH": "0x160AC928A16C93eD4895C2De6f81ECcE9a7eB7b4" },
    { "LTC / USD": "0x6AF09DF7563C363B5763b9102712EbeD3b9e859B" },
    { "MANA / ETH": "0x82A44D92D6c329826dc557c5E1Be6ebeC5D5FeB9" },
    { "MKR / ETH": "0x24551a8Fb2A7211A25a17B1481f043A8a8adC7f2" },
    { "N225 / JPY": "0x5c4939a2ab3A2a9f93A518d81d4f8D0Bc6a68980" },
    { "NMR / ETH": "0x9cB2A01A7E64992d32A34db7cEea4c919C391f6A" },
    { "Orchid": "0xa175FA75795c6Fb2aFA48B72d22054ee0DeDa4aC" },
    { "RCN / BTC": "0xEa0b3DCa635f4a4E77D9654C5c18836EE771566e" },
    { "REN / ETH": "0x3147D7203354Dc06D9fd350c7a2437bcA92387a4" },
    { "REN / USD": "0x0f59666EDE214281e956cb3b2D0d69415AfF4A01" },
    { "REP / ETH": "0xD4CE430C3b67b3E2F7026D86E7128588629e2455" },
    { "SNX / ETH": "0x79291A9d692Df95334B1a0B3B4AE6bC606782f8c" },
    { "SNX / USD": "0xDC3EA94CD0AC27d9A86C180091e7f78C683d3699" },
    { "SUSD / ETH": "0x8e0b7e6062272B5eF4524250bFFF8e5Bd3497757" },
    { "SXP / USD": "0xFb0CfD6c19e25DB4a08D8a204a387cEa48Cc138f" },
    { "TRX / USD": "0xacD0D1A29759CC01E8D925371B72cb2b5610EA25" },
    { "TUSD / ETH": "0x3886BA987236181D98F2401c507Fb8BeA7871dF2" },
    { "UNI / ETH": "0xD6aA3D25116d8dA79Ea0246c4826EB951872e02e" },
    { "USDC / ETH": "0x986b5E1e1755e3C2440e960477f25201B0a8bbD4" },
    { "USDT / ETH": "0xEe9F2375b4bdF6387aa8265dD4FB8F16512A1d46" },
    { "WOM / ETH": "0xcEBD2026d3C99F2a7CE028acf372C154aB4638a9" },
    { "XAG / USD": "0x379589227b15F1a12195D3f2d90bBc9F31f95235" },
    { "XAU / USD": "0x214eD9Da11D2fbe465a6fc601a91E62EbEc1a0D6" },
    { "XHV / USD": "0xeccBeEd9691d8521385259AE596CF00D68429de0" },
    { "XMR / USD": "0xFA66458Cce7Dd15D8650015c4fce4D278271618F" },
    { "XRP / USD": "0xCed2660c6Dd1Ffd856A5A82C67f3482d88C50b12" },
    { "XTZ / USD": "0x5239a625dEb44bF3EeAc2CD5366ba24b8e9DB63F" },
    { "YFI / ETH": "0x7c5d4F8345e66f68099581Db340cd65B078C41f4" },
    { "ZRX / ETH": "0x2Da4983a622a8498bb1a21FaE9D8F6C664939962" },
    { "sCEX / USD": "0x283D433435cFCAbf00263beEF6A362b7cc5ed9f2" },
    { "sDEFI / USD": "0xa8E875F94138B0C5b51d1e1d5dE35bbDdd28EA87" },
]

const KOVAN = [
    { "AAVE / ETH": "0xd04647B7CB523bb9f26730E9B6dE1174db7591Ad" },
    { "AMPL / ETH": "0x562C092bEb3a6DF77aDf0BB604F52c018E4f2814" },
    { "AUD / USD": "0x5813A90f826e16dB392abd2aF7966313fc1fd5B8" },
    { "BAT / ETH": "0x0e4fcEC26c9f85c3D714370c98f43C4E02Fc35Ae" },
    { "BAT / USD": "0x8e67A0CFfbbF6A346ce87DFe06daE2dc782b3219" },
    { "BNB / USD": "0x8993ED705cdf5e84D0a3B754b5Ee0e1783fcdF16" },
    { "BTC / ETH": "0xF7904a295A029a3aBDFFB6F12755974a958C7C25" },
    { "BTC / USD": "0x6135b13325bfC4B00278B4abC5e20bbce2D6580e" },
    { "BUSD / ETH": "0xbF7A18ea5DE0501f7559144e702b29c55b055CcB" },
    { "BZRX / ETH": "0x9aa9da35DC44F93D90436BfE256f465f720c3Ae5" },
    { "CHF / USD": "0xed0616BeF04D374969f302a34AE4A63882490A8C" },
    { "DAI / ETH": "0x22B58f1EbEDfCA50feF632bD73368b2FdA96D541" },
    { "DAI / USD": "0x777A68032a88E5A84678A77Af2CD65A7b3c0775a" },
    { "ENJ / ETH": "0xfaDbe2ee798889F02d1d39eDaD98Eff4c7fe95D4" },
    { "ETH / USD": "0x9326BFA02ADD2366b30bacB125260Af641031331" },
    { "EUR / USD": "0x0c15Ab9A0DB086e062194c273CC79f41597Bbf13" },
    { "Ferrari F12 TDF / USD": "0x22a2D07993A1A18b3b86E56F960fa735b6D6cFD9" },
    { "GBP / USD": "0x28b0061f44E6A9780224AA61BEc8C3Fcb0d37de9" },
    { "JPY / USD": "0xD627B1eF3AC23F1d3e576FA6206126F3c1Bd0942" },
    { "KNC / ETH": "0xb8E8130d244CFd13a75D6B9Aee029B1C33c808A7" },
    { "LINK / ETH": "0x3Af8C569ab77af5230596Acf0E8c2F9351d24C38" },
    { "LINK / USD": "0x396c5E36DD0a0F5a5D33dae44368D4193f69a1F0" },
    { "LTC / USD": "0xCeE03CF92C7fFC1Bad8EAA572d69a4b61b6D4640" },
    { "MANA / ETH": "0x1b93D8E109cfeDcBb3Cc74eD761DE286d5771511" },
    { "MKR / ETH": "0x0B156192e04bAD92B6C1C13cf8739d14D78D5701" },
    { "ORN / USDT": "0x66413F734E69C2C41B4902024D0C5C3A86b8EcD2" },
    { "Oil / USD": "0x48c9FF5bFD7D12e3C511022A6E54fB1c5b8DC3Ea" },
    { "REN / ETH": "0xF1939BECE7708382b5fb5e559f630CB8B39a10ee" },
    { "REP / ETH": "0x3A7e6117F2979EFf81855de32819FBba48a63e9e" },
    { "SNX / ETH": "0xF9A76ae7a1075Fe7d646b06fF05Bd48b9FA5582e" },
    { "SNX / USD": "0x31f93DA9823d737b7E44bdee0DF389Fe62Fd1AcD" },
    { "SUSD / ETH": "0xb343e7a1aF578FA35632435243D814e7497622f7" },
    { "TRX / USD": "0x9477f0E5bfABaf253eacEE3beE3ccF08b46cc79c" },
    { "TUSD / ETH": "0x7aeCF1c19661d12E962b69eBC8f6b2E63a55C660" },
    { "UNI / ETH": "0x17756515f112429471F86f98D5052aCB6C47f6ee" },
    { "USDC / ETH": "0x64EaC61A2DFda2c3Fa04eED49AA33D021AeC8838" },
    { "USDT / ETH": "0x0bF499444525a23E7Bb61997539725cA2e928138" },
    { "XAG / USD": "0x4594051c018Ac096222b5077C3351d523F93a963" },
    { "XAU / USD": "0xc8fb5684f2707C82f28595dEaC017Bfdf44EE9c5" },
    { "XRP / USD": "0x3eA2b7e3ed9EA9120c3d6699240d1ff2184AC8b3" },
    { "XTZ / USD": "0xC6F39246494F25BbCb0A8018796890037Cb5980C" },
    { "YFI / ETH": "0xC5d1B1DEb2992738C0273408ac43e1e906086B6C" },
    { "ZRX / ETH": "0xBc3f28Ccc21E9b5856E81E6372aFf57307E2E883" },
    { "sCEX / USD": "0xA85646318D20C684f6251097d24A6e74Fe1ED5eB" },
    { "sDEFI / USD": "0x70179FB2F3A0a5b7FfB36a235599De440B0922ea" },
];
export default {
    INFURA_NETWORK: IS_DEV ? 'rinkeby' : 'mainnet',
    INFURA_APP_ID: IS_DEV ? 'c189dface8954ef5a1b5a44cec1e4add' : 'c189dface8954ef5a1b5a44cec1e4add',
    FIXED_POOL_CONTRACT: IS_DEV ? '0xaA55498fe78FecD16ecA8e88f608eedF578a3b6A' : '0x4a0751e203C0B9780025344699d8A8e107612E3f',
    FLOAT_POOL_CONTRACT: IS_DEV ? '0xd04B4Fde7Ea3aeFdA32a0dAEE4cdAa8ECE11d1Ed' : '0xFb6532445D1931802743aD6FBbbc66c7FB839916',

    FIXED_POOL_CONTRACT_V2: IS_DEV ? '0xaA55498fe78FecD16ecA8e88f608eedF578a3b6A' : '0x4a0751e203C0B9780025344699d8A8e107612E3f',
    FLOAT_POOL_CONTRACT_V2: IS_DEV ? '0xd04B4Fde7Ea3aeFdA32a0dAEE4cdAa8ECE11d1Ed' : '0xFb6532445D1931802743aD6FBbbc66c7FB839916',
    MARKET_PRICE_CONTRACT: IS_DEV ? '0xd17070622b4Bb6BEE8e974C4703924fa1a22321a' : '0xFf1B56597a71F2317746EA430f73ac3475cBc46c',

    NFT_SWAP_CONTRACT: IS_DEV ? '0xe13B48E814eEBFB82E51B03935E8E5A8019E5E6b':'0xf109261Ee7423398370E5A2721c1Eb869Ae06fF0',

    CMC_KEY: '58d888b1-5629-49c9-9764-9f76d447112e',

    DB: {
        HOST: IS_DEV ? '127.0.0.1' : 'bondlyropsten.cilxc9dlhvh2.us-east-2.rds.amazonaws.com',
        PORT: 3306,
        USERNAME: IS_DEV ? 'root' : 'cryptodev',
        PASSPORT: IS_DEV ? 'Test@123' : 'Z66hKE^a^g4H',
    },
    PRICE_FEEDS: IS_DEV ? KOVAN : MAINNET
};
console.log(process.env.NODE_ENV)