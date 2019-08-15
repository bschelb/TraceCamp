import React from 'react';

export const useArray = (initialEntries) => {
	// create state
	// set initial state to undefined
	// so {entries ? entries.map() : null} can be used
	const [ entries, setEntries ] = React.useState(initialEntries);

	const actions = React.useMemo(() => {
		// return 'this' for method chaining

		// mutable array methods https://stackoverflow.com/a/9009934

		// immutable js methods
		// https://vincent.billey.me/pure-javascript-immutable-array/
		// https://github.com/azu/immutable-array-prototype

		// TODO: what about Array.from() and Array.of()
		// TODO: what about delete arr[index]
		// https://stackoverflow.com/questions/500606/deleting-array-elements-in-javascript-delete-vs-splice

		console.log('MEMO cache created');

		const actions = setEntries;
		actions.set = setEntries;

		// hasMutatorMethods
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Mutator_methods
		actions.copyWithin = function(target, start, end) {
			setEntries((entries) =>
				entries.concat().copyWithin(target, start, end),
			);
			return this;
		};

		actions.fill = function(value, start, end) {
			setEntries((entries) => entries.concat().fill(value, start, end));
			return this;
		};

		actions.pop = function(howMany = 1) {
			setEntries((entries) => entries.slice(0, -howMany));
			return this;
		};

		actions.push = function(...newEntries) {
			setEntries((entries) => entries.concat(newEntries));
			return this;
		};

		actions.reverse = function() {
			setEntries((entries) => entries.concat().reverse());
			return this;
		};

		actions.shift = function(howMany = 1) {
			setEntries((entries) => entries.slice(howMany));
			return this;
		};

		actions.sort = function(compareFunction) {
			setEntries((entries) => entries.concat().sort(compareFunction));
			return this;
		};

		actions.splice = function(start, deleteCount, ...items) {
			setEntries((entries) => {
				const clone = entries.concat();
				clone.splice(start, deleteCount, ...items);
				return clone;
			});
			return this;
		};

		actions.unshift = function(...newEntries) {
			setEntries((entries) => newEntries.concat(entries));
			return this;
		};

		// hasAccessorMethods
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Accessor_methods
		actions.concat = function(...arrays) {
			setEntries((entries) => entries.concat(...arrays));
			return this;
		};

		actions.slice = function(begin, end) {
			setEntries((entries) => entries.slice(begin, end));
			return this;
		};

		// hasIterationMethods
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Iteration_methods
		actions.filter = function(callback) {
			setEntries((entries) => entries.filter(callback));
			return this;
		};

		actions.forEach = function(callback) {
			setEntries((entries) => entries.map(callback));
			return this;
		};

		actions.map = actions.forEach;

		actions.reduce = function(callback, initialValue) {
			setEntries((entries) => entries.reduce(callback, initialValue));
			return this;
		};

		actions.reduceRight = function(callback, initialValue) {
			setEntries((entries) =>
				entries.reduceRight(callback, initialValue),
			);
			return this;
		};

		// hasLibraryMethods
		actions.clear = function() {
			setEntries([]);
			return this;
		};

		actions.remove = function(index, howMany = 1) {
			setEntries((entries) => [
				...entries.slice(0, index),
				...entries.slice(index + howMany),
			]);
			return this;
		};

		actions.insert = function(index, ...newEntries) {
			// https://stackoverflow.com/a/15621345
			setEntries((entries) => {
				return entries
					.slice(0, index)
					.concat(newEntries)
					.concat(entries.slice(index));
			});
			return this;
		};

		actions.replace = function(index, value) {
			setEntries((entries) => {
				const clone = entries.concat();
				clone[index] = value;
				return clone;
			});
			return this;
		};

		actions.delete = function(index) {
			setEntries((entries) => {
				const clone = entries.concat();
				delete clone[index];
				return clone;
			});
			return this;
		};

		actions.moveTo = function(oldIndex, newIndex, howMany = 1) {
			setEntries((entries) => {
				const itemsToMove = entries.slice(oldIndex, oldIndex + howMany);
				const remainingEntries = [
					...entries.slice(0, oldIndex),
					...entries.slice(oldIndex + howMany),
				];
				const result = [
					...remainingEntries.slice(0, newIndex),
					...itemsToMove,
					...remainingEntries.slice(newIndex),
				];
				return result;
			});
			return this;
		};

		actions.moveBy = function(oldIndex, distance, howMany = 1) {
			setEntries((entries) => {
				const itemsToMove = entries.slice(oldIndex, oldIndex + howMany);
				const remainingEntries = [
					...entries.slice(0, oldIndex),
					...entries.slice(oldIndex + howMany),
				];
				const newIndex = oldIndex + distance;
				const result = [
					...remainingEntries.slice(0, newIndex),
					...itemsToMove,
					...remainingEntries.slice(newIndex),
				];
				return result;
			});
			return this;
		};

		return actions;
	}, []);

	return [ entries, actions ];
};

export default useArray;
