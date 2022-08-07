import { Text, Input, Flex } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"

import styles from "./Header.module.css"

const Header = () => {
	return (
		<div className={styles.header}>
			<Flex h='100%' justify='space-between' align='center'>
				<Text fontSize="30px" color="white" ml={20}>
					HUGSPOT
				</Text>
				<Input placeholder="キーワードを入力" w={500} h={40} pl={20}/>
				<HamburgerIcon w={30} h={30} mr={40} color='white'/>
			</Flex>
		</div>
	)
}

export default Header
