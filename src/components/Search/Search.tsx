import { useState } from 'react'
import { useRouter } from 'next/router'
import { Ethereum, SearchNormal } from 'iconsax-react'

import { Loader } from '../Loader/Loader'
import styles from './Search.module.css'

type SearchProps = {
    onSearch: (value: string) => void
    isSearchLoading: boolean
}

export const Search: React.FC<SearchProps> = ({
    onSearch,
    isSearchLoading,
}) => {
    const [inputValue, setInputValue] = useState(
        '0xd8da6bf26964af9d7eed9e03e53415d37aa96045'
    )

    const router = useRouter()

    function handleOnSearch() {
        router.push({
            pathname: '/',
            query: { address: inputValue },
        })
        onSearch(inputValue)
    }

    return (
        <div className={`${styles['search-bar']} flex align-items-center`}>
            <Ethereum size='30' color='var(--green-400)' />
            <input
                name='addressInput'
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                type='text'
                className={styles['search-input']}
                placeholder='Your public ethereum address'
            />
            <button
                type='button'
                onClick={handleOnSearch}
                className={`${styles['search-btn']} flex justify-content-center align-items-center`}
                disabled={isSearchLoading}
            >
                {isSearchLoading ? (
                    <div className={styles.loaderWrapper}>
                        <Loader />
                    </div>
                ) : (
                    <SearchNormal
                        size='20'
                        color='var(--dark-900)'
                        variant='Bold'
                    />
                )}
            </button>
        </div>
    )
}
