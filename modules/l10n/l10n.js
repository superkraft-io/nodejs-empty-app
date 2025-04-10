module.exports = class MyApp_L10N {
    constructor(){
        this.load()
    }

    async load(){
        var l10n = JSON.parse(await fs.promises.readFile(__dirname + '/l10n.json'))
        this.updateFromJSON(l10n)
        
    }

    updateFromJSON(json){
        this.categorized = json
        //notify all windows
    }

    getForCountry(country){
        var categorized = this.categorized

        if (!categorized) return {}

        var _country = country || 'en'

        var language = this.categorized[_country]

        if (!language) language = this.categorized.en

        return language
    }

    listCountries(country){
        return Object.keys(this.categorized)
    }

    getPhrase(phraseID, fallbackPhrase = '<l10n_error>'){
        var lang = global.sk.country
        if (!this.categorized[lang]) lang = 'en'
        var phrase = fallbackPhrase
        try { phrase = this.categorized[lang][phraseID] || fallbackPhrase } catch(err) { phrase = fallbackPhrase }
        return phrase
    }
}