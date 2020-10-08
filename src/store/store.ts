import { createStore } from "vuex";

import { getStorage, setStorage } from "@/libs/storage/storage";

import {
	CHANGE_PREPARE,
	CHANGE_REST,
	CHANGE_WORK,
	CHANGE_CYCLES,
} from "./actions.type";

export type AppState = {
	prepare: number;
	rest: number;
	work: number;
	cycles: number;
};

const storageKeys = {
	prepare: "prepare",
	rest: "rest",
	work: "work",
	cycles: "cycles",
};

export const store = createStore<AppState>({
	state: () => {
		const prepare = getStorage(storageKeys.prepare);
		const rest = getStorage(storageKeys.rest);
		const work = getStorage(storageKeys.work);
		const cycles = getStorage(storageKeys.cycles);

		return {
			prepare: prepare !== null ? Number.parseInt(prepare, 10) : 2,
			rest: rest !== null ? Number.parseInt(rest, 10) : 20,
			work: work !== null ? Number.parseInt(work, 10) : 30,
			cycles: cycles !== null ? Number.parseInt(cycles, 10) : 8,
		};
	},

	mutations: {
		[CHANGE_PREPARE](state, value: number): void {
			state.prepare = value;
			setStorage(storageKeys.prepare, value.toString());
		},

		[CHANGE_REST](state, value: number): void {
			state.rest = value;
			setStorage(storageKeys.rest, value.toString());
		},

		[CHANGE_WORK](state, value: number): void {
			state.work = value;
			setStorage(storageKeys.work, value.toString());
		},

		[CHANGE_CYCLES](state, value: number): void {
			state.cycles = value;
			setStorage(storageKeys.cycles, value.toString());
		},
	},
});
