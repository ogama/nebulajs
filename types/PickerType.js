exports.PickerType = {
    options: {
        items: null
    },
    generate: (context) => {

        if (context.options.items == null) {
            throw new Error('items option must be defined');
        }

        let index = parseInt((Math.random() * (context.options.items.length - 1))
            .toFixed(0));

        return context.options.items[index];
    }
};