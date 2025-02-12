mod MarketError {
    use starknet::ContractAddress;
    use satoru::utils::{i256::{i256}};


    const MARKET_NOT_FOUND: felt252 = 'market_not_found';
    const DIVISOR_CANNOT_BE_ZERO: felt252 = 'zero_divisor';
    const INVALID_MARKET_PARAMS: felt252 = 'invalid_market_params';
    const OPEN_INTEREST_CANNOT_BE_UPDATED_FOR_SWAP_ONLY_MARKET: felt252 =
        'oi_not_updated_swap_only_market';
    const INVALID_SWAP_MARKET: felt252 = 'invalid_swap_market';
    const EMPTY_ADDRESS_IN_MARKET_TOKEN_BALANCE_VALIDATION: felt252 =
        'empty_addr_market_balance_val';
    const EMPTY_ADDRESS_TOKEN_BALANCE_VAL: felt252 = 'empty_addr_token_balance_val';
    const INVALID_MARKET_TOKEN_BALANCE: felt252 = 'invalid_market_token_balance';
    const INVALID_POSITION_MARKET: felt252 = 'invalid_position_market';
    const INVALID_COLLATERAL_TOKEN_FOR_MARKET: felt252 = 'invalid_coll_token_for_market';
    const UNABLE_TO_GET_OPPOSITE_TOKEN: felt252 = 'unable_to_get_opposite_token';
    const EMPTY_MARKET: felt252 = 'empty_market';
    const COLLATERAL_ALREADY_CLAIMED: felt252 = 'collateral_already_claimed';

    fn DISABLED_MARKET(is_market_disabled: bool) {
        panic(array!['minimum_position_size', is_market_disabled.into()])
    }

    fn EMPTY_MARKET_TOKEN_SUPPLY(supply: u256) {
        panic(
            array!['empty_market_token_supply', supply.try_into().expect('u256 into felt failed')]
        )
    }

    fn INVALID_MARKET_COLLATERAL_TOKEN(market: ContractAddress, token: ContractAddress) {
        panic(array!['invalid_market_collateral_token', market.into(), token.into()])
    }

    fn UNABLE_TO_GET_FUNDING_FACTOR_EMPTY_OPEN_INTEREST(total_open_interest: u256) {
        panic(
            array![
                'unable_to_get_funding_factor',
                total_open_interest.try_into().expect('u256 into felt failed')
            ]
        )
    }

    fn MAX_SWAP_PATH_LENGTH_EXCEEDED(token_swap_path_length: u32, max_swap_path_length: u256) {
        panic(
            array![
                'max_swap_path_length_exceeded',
                token_swap_path_length.into(),
                max_swap_path_length.try_into().expect('u256 into felt failed')
            ]
        )
    }

    fn PNL_EXCEEDED_FOR_LONGS(
        is_pnl_factor_exceeded_for_longs: bool,
        pnl_to_pool_factor_for_longs: i256,
        max_pnl_factor_for_longs: u256
    ) {
        panic(
            array![
                'pnl_exceeded_for_longs',
                is_pnl_factor_exceeded_for_longs.into(),
                pnl_to_pool_factor_for_longs.into(),
                max_pnl_factor_for_longs.try_into().expect('u256 into felt failed')
            ]
        )
    }

    fn PNL_EXCEEDED_FOR_SHORTS(
        is_pnl_factor_exceeded_for_shorts: bool,
        pnl_to_pool_factor_for_shorts: i256,
        max_pnl_factor_for_shorts: u256
    ) {
        panic(
            array![
                'pnl_exceeded_for_shorts',
                is_pnl_factor_exceeded_for_shorts.into(),
                pnl_to_pool_factor_for_shorts.into(),
                max_pnl_factor_for_shorts.try_into().expect('u256 into felt failed')
            ]
        )
    }

    fn UI_FEE_FACTOR_EXCEEDED(ui_fee_factor: u256, max_ui_fee_factor: u256) {
        panic(
            array![
                'ui_fee_factor_exceeded',
                ui_fee_factor.try_into().expect('u256 into felt failed'),
                max_ui_fee_factor.try_into().expect('u256 into felt failed')
            ]
        )
    }

    fn INVALID_MARKET_TOKEN_BALANCE_FOR_COLLATERAL_AMOUNT(balance: u256, collateral_amount: u256) {
        panic(
            array![
                'invalid_mrkt_tkn_balance_col',
                balance.try_into().expect('u256 into felt failed'),
                collateral_amount.try_into().expect('u256 into felt failed')
            ]
        )
    }

    fn INVALID_MARKET_TOKEN_BALANCE_FOR_CLAIMABLE_FUNDING(
        balance: u256, claimable_funding_fee_amount: u256
    ) {
        panic(
            array![
                'invalid_mrkt_tkn_balance_clm',
                balance.try_into().expect('u256 into felt failed'),
                claimable_funding_fee_amount.try_into().expect('u256 into felt failed')
            ]
        )
    }

    fn UNABLE_TO_GET_BORROWING_FACTOR_EMPTY_POOL_USD(
        pool_usd: u256, market: ContractAddress, token: ContractAddress
    ) {
        panic(
            array![
                'unable_to_get_borrowing_factor',
                pool_usd.try_into().expect('u256 into felt failed')
            ]
        )
    }

    fn MAX_OPEN_INTEREST_EXCEDEED(open_interest: u256, max_open_interest: u256) {
        panic(
            array![
                'max_open_interest_exceeded',
                open_interest.try_into().expect('u256 into felt failed'),
                max_open_interest.try_into().expect('u256 into felt failed')
            ]
        )
    }

    fn UNABLE_TO_GET_CACHED_TOKEN_PRICE(token_in: ContractAddress, market_token: ContractAddress) {
        panic(array!['unable_to_get_cached_token_pri', token_in.into(), market_token.into()])
    }

    fn MAX_POOL_AMOUNT_EXCEEDED(pool_amount: u256, max_pool_amount: u256) {
        panic(
            array![
                'max_pool_amount_exceeded',
                pool_amount.try_into().expect('u256 into felt failed'),
                max_pool_amount.try_into().expect('u256 into felt failed')
            ]
        )
    }

    fn INSUFFICIENT_RESERVE(reserve: u256, amount: u256) {
        panic(
            array![
                'insufficient_reserve',
                reserve.try_into().expect('u256 into felt failed'),
                amount.try_into().expect('u256 into felt failed')
            ]
        )
    }

    fn UNEXCEPTED_BORROWING_FACTOR(borrowing_factor: u256, next: u256) {
        panic(
            array![
                'unexpected_borrowing_factor',
                borrowing_factor.try_into().expect('u256 into felt failed'),
                next.try_into().expect('u256 into felt failed')
            ]
        )
    }

    fn UNEXCEPTED_TOKEN(token: ContractAddress) {
        panic(array!['unexpected_token', token.into()])
    }

    fn INVALID_MARKET_TOKEN_BALANCE_VALUE(
        balance: u256, expected_min_balance: u256, token: ContractAddress
    ) {
        panic(
            array![
                INVALID_MARKET_TOKEN_BALANCE,
                balance.try_into().expect('u256 into felt failed'),
                expected_min_balance.try_into().expect('u256 into felt failed'),
                token.into()
            ]
        )
    }
}
