export const DataStoreABI = [
  {
    "type": "impl",
    "name": "DataStore",
    "interface_name": "satoru::data::data_store::IDataStore"
  },
  {
    "type": "enum",
    "name": "core::bool",
    "variants": [
      {
        "name": "False",
        "type": "()"
      },
      {
        "name": "True",
        "type": "()"
      }
    ]
  },
  {
    "type": "struct",
    "name": "core::integer::u256",
    "members": [
      {
        "name": "low",
        "type": "core::integer::u128"
      },
      {
        "name": "high",
        "type": "core::integer::u128"
      }
    ]
  },
  {
    "type": "struct",
    "name": "satoru::utils::i256::i256",
    "members": [
      {
        "name": "mag",
        "type": "core::integer::u256"
      },
      {
        "name": "sign",
        "type": "core::bool"
      }
    ]
  },
  {
    "type": "struct",
    "name": "satoru::market::market::Market",
    "members": [
      {
        "name": "market_token",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "index_token",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "long_token",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "short_token",
        "type": "core::starknet::contract_address::ContractAddress"
      }
    ]
  },
  {
    "type": "enum",
    "name": "satoru::order::order::OrderType",
    "variants": [
      {
        "name": "MarketSwap",
        "type": "()"
      },
      {
        "name": "LimitSwap",
        "type": "()"
      },
      {
        "name": "MarketIncrease",
        "type": "()"
      },
      {
        "name": "LimitIncrease",
        "type": "()"
      },
      {
        "name": "MarketDecrease",
        "type": "()"
      },
      {
        "name": "LimitDecrease",
        "type": "()"
      },
      {
        "name": "StopLossDecrease",
        "type": "()"
      },
      {
        "name": "Liquidation",
        "type": "()"
      }
    ]
  },
  {
    "type": "enum",
    "name": "satoru::order::order::DecreasePositionSwapType",
    "variants": [
      {
        "name": "NoSwap",
        "type": "()"
      },
      {
        "name": "SwapPnlTokenToCollateralToken",
        "type": "()"
      },
      {
        "name": "SwapCollateralTokenToPnlToken",
        "type": "()"
      }
    ]
  },
  {
    "type": "struct",
    "name": "core::array::Span::<core::starknet::contract_address::ContractAddress>",
    "members": [
      {
        "name": "snapshot",
        "type": "@core::array::Array::<core::starknet::contract_address::ContractAddress>"
      }
    ]
  },
  {
    "type": "struct",
    "name": "satoru::utils::span32::Span32::<core::starknet::contract_address::ContractAddress>",
    "members": [
      {
        "name": "snapshot",
        "type": "core::array::Span::<core::starknet::contract_address::ContractAddress>"
      }
    ]
  },
  {
    "type": "struct",
    "name": "satoru::order::order::Order",
    "members": [
      {
        "name": "key",
        "type": "core::felt252"
      },
      {
        "name": "order_type",
        "type": "satoru::order::order::OrderType"
      },
      {
        "name": "decrease_position_swap_type",
        "type": "satoru::order::order::DecreasePositionSwapType"
      },
      {
        "name": "account",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "receiver",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "callback_contract",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "ui_fee_receiver",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "market",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "initial_collateral_token",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "swap_path",
        "type": "satoru::utils::span32::Span32::<core::starknet::contract_address::ContractAddress>"
      },
      {
        "name": "size_delta_usd",
        "type": "core::integer::u256"
      },
      {
        "name": "initial_collateral_delta_amount",
        "type": "core::integer::u256"
      },
      {
        "name": "trigger_price",
        "type": "core::integer::u256"
      },
      {
        "name": "acceptable_price",
        "type": "core::integer::u256"
      },
      {
        "name": "execution_fee",
        "type": "core::integer::u256"
      },
      {
        "name": "callback_gas_limit",
        "type": "core::integer::u256"
      },
      {
        "name": "min_output_amount",
        "type": "core::integer::u256"
      },
      {
        "name": "updated_at_block",
        "type": "core::integer::u64"
      },
      {
        "name": "is_long",
        "type": "core::bool"
      },
      {
        "name": "is_frozen",
        "type": "core::bool"
      }
    ]
  },
  {
    "type": "struct",
    "name": "satoru::position::position::Position",
    "members": [
      {
        "name": "key",
        "type": "core::felt252"
      },
      {
        "name": "account",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "market",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "collateral_token",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "size_in_usd",
        "type": "core::integer::u256"
      },
      {
        "name": "size_in_tokens",
        "type": "core::integer::u256"
      },
      {
        "name": "collateral_amount",
        "type": "core::integer::u256"
      },
      {
        "name": "borrowing_factor",
        "type": "core::integer::u256"
      },
      {
        "name": "funding_fee_amount_per_size",
        "type": "core::integer::u256"
      },
      {
        "name": "long_token_claimable_funding_amount_per_size",
        "type": "core::integer::u256"
      },
      {
        "name": "short_token_claimable_funding_amount_per_size",
        "type": "core::integer::u256"
      },
      {
        "name": "increased_at_block",
        "type": "core::integer::u64"
      },
      {
        "name": "decreased_at_block",
        "type": "core::integer::u64"
      },
      {
        "name": "is_long",
        "type": "core::bool"
      }
    ]
  },
  {
    "type": "struct",
    "name": "satoru::withdrawal::withdrawal::Withdrawal",
    "members": [
      {
        "name": "key",
        "type": "core::felt252"
      },
      {
        "name": "account",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "receiver",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "callback_contract",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "ui_fee_receiver",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "market",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "long_token_swap_path",
        "type": "satoru::utils::span32::Span32::<core::starknet::contract_address::ContractAddress>"
      },
      {
        "name": "short_token_swap_path",
        "type": "satoru::utils::span32::Span32::<core::starknet::contract_address::ContractAddress>"
      },
      {
        "name": "market_token_amount",
        "type": "core::integer::u256"
      },
      {
        "name": "min_long_token_amount",
        "type": "core::integer::u256"
      },
      {
        "name": "min_short_token_amount",
        "type": "core::integer::u256"
      },
      {
        "name": "updated_at_block",
        "type": "core::integer::u64"
      },
      {
        "name": "execution_fee",
        "type": "core::integer::u256"
      },
      {
        "name": "callback_gas_limit",
        "type": "core::integer::u256"
      }
    ]
  },
  {
    "type": "struct",
    "name": "satoru::deposit::deposit::Deposit",
    "members": [
      {
        "name": "key",
        "type": "core::felt252"
      },
      {
        "name": "account",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "receiver",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "callback_contract",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "ui_fee_receiver",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "market",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "initial_long_token",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "initial_short_token",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "long_token_swap_path",
        "type": "satoru::utils::span32::Span32::<core::starknet::contract_address::ContractAddress>"
      },
      {
        "name": "short_token_swap_path",
        "type": "satoru::utils::span32::Span32::<core::starknet::contract_address::ContractAddress>"
      },
      {
        "name": "initial_long_token_amount",
        "type": "core::integer::u256"
      },
      {
        "name": "initial_short_token_amount",
        "type": "core::integer::u256"
      },
      {
        "name": "min_market_tokens",
        "type": "core::integer::u256"
      },
      {
        "name": "updated_at_block",
        "type": "core::integer::u64"
      },
      {
        "name": "execution_fee",
        "type": "core::integer::u256"
      },
      {
        "name": "callback_gas_limit",
        "type": "core::integer::u256"
      }
    ]
  },
  {
    "type": "interface",
    "name": "satoru::data::data_store::IDataStore",
    "items": [
      {
        "type": "function",
        "name": "get_max_pool_amount_key",
        "inputs": [
          {
            "name": "market_token",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "token",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "core::felt252"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_open_interest_key",
        "inputs": [
          {
            "name": "market",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "collateral_token",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "is_long",
            "type": "core::bool"
          }
        ],
        "outputs": [
          {
            "type": "core::felt252"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_max_open_interest_key",
        "inputs": [
          {
            "name": "market",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "is_long",
            "type": "core::bool"
          }
        ],
        "outputs": [
          {
            "type": "core::felt252"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_pool_amount_key",
        "inputs": [
          {
            "name": "market",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "token",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "core::felt252"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_max_pnl_factor_key",
        "inputs": [
          {
            "name": "pnl_factor_type",
            "type": "core::felt252"
          },
          {
            "name": "market",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "is_long",
            "type": "core::bool"
          }
        ],
        "outputs": [
          {
            "type": "core::felt252"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_max_pnl_factor_for_deposit_key",
        "inputs": [],
        "outputs": [
          {
            "type": "core::felt252"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_max_pnl_factor_for_withdrawals_key",
        "inputs": [],
        "outputs": [
          {
            "type": "core::felt252"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_reserve_factor_key",
        "inputs": [
          {
            "name": "market",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "is_long",
            "type": "core::bool"
          }
        ],
        "outputs": [
          {
            "type": "core::felt252"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_open_interest_reserve_factor_key",
        "inputs": [
          {
            "name": "market",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "is_long",
            "type": "core::bool"
          }
        ],
        "outputs": [
          {
            "type": "core::felt252"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_felt252",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          }
        ],
        "outputs": [
          {
            "type": "core::felt252"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "set_felt252",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          },
          {
            "name": "value",
            "type": "core::felt252"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "remove_felt252",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "increment_felt252",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          },
          {
            "name": "value",
            "type": "core::felt252"
          }
        ],
        "outputs": [
          {
            "type": "core::felt252"
          }
        ],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "decrement_felt252",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          },
          {
            "name": "value",
            "type": "core::felt252"
          }
        ],
        "outputs": [
          {
            "type": "core::felt252"
          }
        ],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "get_u256",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          }
        ],
        "outputs": [
          {
            "type": "core::integer::u256"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "set_u256",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          },
          {
            "name": "value",
            "type": "core::integer::u256"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "remove_u256",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "increment_u256",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          },
          {
            "name": "value",
            "type": "core::integer::u256"
          }
        ],
        "outputs": [
          {
            "type": "core::integer::u256"
          }
        ],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "decrement_u256",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          },
          {
            "name": "value",
            "type": "core::integer::u256"
          }
        ],
        "outputs": [
          {
            "type": "core::integer::u256"
          }
        ],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "apply_delta_to_u256",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          },
          {
            "name": "value",
            "type": "satoru::utils::i256::i256"
          },
          {
            "name": "error",
            "type": "core::felt252"
          }
        ],
        "outputs": [
          {
            "type": "core::integer::u256"
          }
        ],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "apply_bounded_delta_to_u256",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          },
          {
            "name": "value",
            "type": "satoru::utils::i256::i256"
          }
        ],
        "outputs": [
          {
            "type": "core::integer::u256"
          }
        ],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "get_address",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          }
        ],
        "outputs": [
          {
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "set_address",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          },
          {
            "name": "value",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "remove_address",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "get_bool",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          }
        ],
        "outputs": [
          {
            "type": "core::bool"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "set_bool",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          },
          {
            "name": "value",
            "type": "core::bool"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "remove_bool",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "get_market",
        "inputs": [
          {
            "name": "key",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "satoru::market::market::Market"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "set_market",
        "inputs": [
          {
            "name": "key",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "salt",
            "type": "core::felt252"
          },
          {
            "name": "market",
            "type": "satoru::market::market::Market"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "get_by_salt_market",
        "inputs": [
          {
            "name": "salt",
            "type": "core::felt252"
          }
        ],
        "outputs": [
          {
            "type": "satoru::market::market::Market"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "remove_market",
        "inputs": [
          {
            "name": "key",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "get_market_salt_hash",
        "inputs": [
          {
            "name": "salt",
            "type": "core::felt252"
          }
        ],
        "outputs": [
          {
            "type": "core::felt252"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_market_count",
        "inputs": [],
        "outputs": [
          {
            "type": "core::integer::u32"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_market_keys",
        "inputs": [
          {
            "name": "start",
            "type": "core::integer::u32"
          },
          {
            "name": "end",
            "type": "core::integer::u32"
          }
        ],
        "outputs": [
          {
            "type": "core::array::Array::<core::starknet::contract_address::ContractAddress>"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "set_token_id",
        "inputs": [
          {
            "name": "token",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "id",
            "type": "core::felt252"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "get_token_id",
        "inputs": [
          {
            "name": "token",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "core::felt252"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_order",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          }
        ],
        "outputs": [
          {
            "type": "satoru::order::order::Order"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "set_order",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          },
          {
            "name": "order",
            "type": "satoru::order::order::Order"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "remove_order",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          },
          {
            "name": "account",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "get_order_keys",
        "inputs": [
          {
            "name": "start",
            "type": "core::integer::u32"
          },
          {
            "name": "end",
            "type": "core::integer::u32"
          }
        ],
        "outputs": [
          {
            "type": "core::array::Array::<core::felt252>"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_order_count",
        "inputs": [],
        "outputs": [
          {
            "type": "core::integer::u32"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_account_order_count",
        "inputs": [
          {
            "name": "account",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "core::integer::u32"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_account_order_keys",
        "inputs": [
          {
            "name": "account",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "start",
            "type": "core::integer::u32"
          },
          {
            "name": "end",
            "type": "core::integer::u32"
          }
        ],
        "outputs": [
          {
            "type": "core::array::Array::<core::felt252>"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_position",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          }
        ],
        "outputs": [
          {
            "type": "satoru::position::position::Position"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "set_position",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          },
          {
            "name": "position",
            "type": "satoru::position::position::Position"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "remove_position",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          },
          {
            "name": "account",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "get_position_keys",
        "inputs": [
          {
            "name": "start",
            "type": "core::integer::u32"
          },
          {
            "name": "end",
            "type": "core::integer::u32"
          }
        ],
        "outputs": [
          {
            "type": "core::array::Array::<core::felt252>"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_position_count",
        "inputs": [],
        "outputs": [
          {
            "type": "core::integer::u32"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_account_position_count",
        "inputs": [
          {
            "name": "account",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "core::integer::u32"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_account_position_keys",
        "inputs": [
          {
            "name": "account",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "start",
            "type": "core::integer::u32"
          },
          {
            "name": "end",
            "type": "core::integer::u32"
          }
        ],
        "outputs": [
          {
            "type": "core::array::Array::<core::felt252>"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_withdrawal",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          }
        ],
        "outputs": [
          {
            "type": "satoru::withdrawal::withdrawal::Withdrawal"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "set_withdrawal",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          },
          {
            "name": "withdrawal",
            "type": "satoru::withdrawal::withdrawal::Withdrawal"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "remove_withdrawal",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          },
          {
            "name": "account",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "get_withdrawal_keys",
        "inputs": [
          {
            "name": "start",
            "type": "core::integer::u32"
          },
          {
            "name": "end",
            "type": "core::integer::u32"
          }
        ],
        "outputs": [
          {
            "type": "core::array::Array::<core::felt252>"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_withdrawal_count",
        "inputs": [],
        "outputs": [
          {
            "type": "core::integer::u32"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_account_withdrawal_count",
        "inputs": [
          {
            "name": "account",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "core::integer::u32"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_account_withdrawal_keys",
        "inputs": [
          {
            "name": "account",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "start",
            "type": "core::integer::u32"
          },
          {
            "name": "end",
            "type": "core::integer::u32"
          }
        ],
        "outputs": [
          {
            "type": "core::array::Array::<core::felt252>"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_deposit",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          }
        ],
        "outputs": [
          {
            "type": "satoru::deposit::deposit::Deposit"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "set_deposit",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          },
          {
            "name": "deposit",
            "type": "satoru::deposit::deposit::Deposit"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "remove_deposit",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          },
          {
            "name": "account",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "get_deposit_keys",
        "inputs": [
          {
            "name": "start",
            "type": "core::integer::u32"
          },
          {
            "name": "end",
            "type": "core::integer::u32"
          }
        ],
        "outputs": [
          {
            "type": "core::array::Array::<core::felt252>"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_deposit_count",
        "inputs": [],
        "outputs": [
          {
            "type": "core::integer::u32"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_account_deposit_count",
        "inputs": [
          {
            "name": "account",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "core::integer::u32"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_account_deposit_keys",
        "inputs": [
          {
            "name": "account",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "start",
            "type": "core::integer::u32"
          },
          {
            "name": "end",
            "type": "core::integer::u32"
          }
        ],
        "outputs": [
          {
            "type": "core::array::Array::<core::felt252>"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_i256",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          }
        ],
        "outputs": [
          {
            "type": "satoru::utils::i256::i256"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "set_i256",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          },
          {
            "name": "value",
            "type": "satoru::utils::i256::i256"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "remove_i256",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "apply_delta_to_i256",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          },
          {
            "name": "value",
            "type": "satoru::utils::i256::i256"
          }
        ],
        "outputs": [
          {
            "type": "satoru::utils::i256::i256"
          }
        ],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "increment_i256",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          },
          {
            "name": "value",
            "type": "satoru::utils::i256::i256"
          }
        ],
        "outputs": [
          {
            "type": "satoru::utils::i256::i256"
          }
        ],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "decrement_i256",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          },
          {
            "name": "value",
            "type": "satoru::utils::i256::i256"
          }
        ],
        "outputs": [
          {
            "type": "satoru::utils::i256::i256"
          }
        ],
        "state_mutability": "external"
      }
    ]
  },
  {
    "type": "constructor",
    "name": "constructor",
    "inputs": [
      {
        "name": "role_store_address",
        "type": "core::starknet::contract_address::ContractAddress"
      }
    ]
  },
  {
    "type": "event",
    "name": "satoru::data::data_store::DataStore::Event",
    "kind": "enum",
    "variants": []
  }
] as const;
