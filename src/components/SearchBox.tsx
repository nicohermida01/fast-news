import styled from 'styled-components'
import { ChangeEventHandler, useState } from 'react'

import { SearchIcon } from './icons/SearchIcon'

export function SearchBox() {
	const [inputValue, setInputValue] = useState('')

	const handleOnChange: ChangeEventHandler<HTMLInputElement> = e => {
		setInputValue(e.target.value)
	}

	const handleClickSearch = () => {}

	return (
		<Container>
			<SearchIconStyled onClick={handleClickSearch} />
			<SearchInput
				type='search'
				placeholder='Bitcoin, Covid ...'
				value={inputValue}
				onChange={handleOnChange}
			/>
		</Container>
	)
}

const Container = styled.div`
	width: 250px;
	position: relative;

	& svg {
		width: 20px;
		height: 20px;
		position: absolute;
		top: calc(50% - 10px);
		left: 16px;
		fill: rgba(0, 0, 0, 0.5);
	}
`

const SearchInput = styled.input`
	width: 100%;
	border: none;
	background-color: rgba(0, 0, 0, 0.05);
	font-size: 12px;
	padding: 8px 16px;
	padding-left: calc(16px + 20px + 4px);
	border-radius: 16px;
	transition: all ease 0.4s;

	&:focus {
		outline: none;
		background-color: rgba(0, 0, 0, 0.1);
	}

	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}
`

const SearchIconStyled = styled(SearchIcon)`
	cursor: pointer;
`
