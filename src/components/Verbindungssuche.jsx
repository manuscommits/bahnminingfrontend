import DateTimePicker from "./DateTimePicker"
import BahnhofSelector from "./BahnhofSelector"
import SearchButton from "./SearchButton"
import VerbindungenAnzeige from "./VerbindungenAnzeige"

const RequestInput = () => {
    return (
        <div>
            <BahnhofSelector />
            <DateTimePicker />
            <SearchButton />
            <VerbindungenAnzeige />
        </div>
    )
}

export default RequestInput