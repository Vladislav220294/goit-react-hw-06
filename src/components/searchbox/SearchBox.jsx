import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchBox.module.css"
import {changeFilter} from "../redux/filtersSlice"

export default function SearchBox() {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filters.name);
    const handleChange = event => {
        dispatch(changeFilter(event.target.value))
    }
    
    return (<div className={styles.form}>
        <label htmlFor='text'>Find contacts by name</label>
        <input type="text" id='text' value={ filter} onChange={handleChange} />
    </div>
        
    )
}