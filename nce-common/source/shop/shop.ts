
import * as crnc from "crnc"
import * as shopper from "shopper"
import * as omnistorage from "omnistorage"

import {ShopOptions} from "./shop-interfaces"

export async function shop({
	precision = 2,
	evaluator = () => ({
		quantityMin: 1,
		quantityMax: 5
	})
}: ShopOptions = {}) {

	return shopper.ecommerceShopifyStore({

		omniStorage: new omnistorage.LocalClient({storage: window.localStorage}),

		// use only CAD, avoid conversions
		currency: {
			precision,
			storeBaseCurrency: "CAD",
			userDisplayCurrency: "CAD",
			exchangeRates: {"CAD": 1}
		},

		// // download rates and use conversions
		// currency: {
		// 	...await crnc.ascertainEcommerceDetails({
		// 		storeBaseCurrency: "CAD",
		// 		userDisplayCurrency: crnc.assumeUserCurrency({fallback: "CAD"})
		// 	}),
		// 	precision
		// },

		shopify: {
			domain: "nail-career-education.myshopify.com",
			storefrontAccessToken: "493f6df6e7fb5bfc231bb9f221fecdee"
		},

		collections: [
			{
				collectionId: btoa("gid://shopify/Collection/40589983780"), // kits
				productsArea: document.querySelector<HTMLElement>(".shopper .products-area.kits")
			},
			{
				collectionId: btoa("gid://shopify/Collection/40590016548"), // tickets
				productsArea: document.querySelector<HTMLElement>(".shopper .products-area.tickets")
			}
		],

		cartArea: document.querySelector<HTMLElement>(".shopper .cart-area"),

		cartSystem: {
			checkoutInNewWindow: false
		},

		evaluator
	})
}
