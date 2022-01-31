import { useState } from "react"
import JoblyApi from "./API";
import { Button, Input } from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';
import './SearchForm.css'


const SearchForm = ({ setCompanies, setJobs }) => {
    const INITIAL_STATE = {
        text: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const filter = async (filterTerm) => {
        if (setCompanies) {
            const res = await JoblyApi.getCompanies(filterTerm)
            setCompanies(res)
        } else {
            const res = await JoblyApi.getJobs(filterTerm)
            setJobs(res)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        filter(formData.text)
        setFormData(INITIAL_STATE)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(formData => ({
            ...formData, [name]: value
        }))
    }

    const resetList = async () => {
        if (setCompanies) {
            const res = await JoblyApi.getCompanies()
            setCompanies(res)
        } else {
            const res = await JoblyApi.getJobs()
            setJobs(res)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Input
                    // color='secondary'
                    variant='Outlined'
                    type='text'
                    name='text'
                    value={formData.text}
                    onChange={handleChange}
                />

                <Button
                    type="submit"
                    variant="contained"
                    id='searchButton'
                    endIcon={<SearchIcon />}
                >Search</Button>
            </form>

            <Button onClick={resetList}
                variant="contained"
                color="primary"
            >Undo Search</Button>
        </>
    )
}

export default SearchForm;