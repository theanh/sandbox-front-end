import StringElement from './StringElement';
import ArrayElement from './ArrayElement';
import TextElement from './TextElement';
import BooleanElement from './BooleanElement';

const datatypes = {
  String: {
    name: 'String',
    label: 'text',
    type: String,
    reactClass: StringElement
  },
  Text: {
    name: 'Text',
    label: 'text',
    type: String,
    reactClass: TextElement
  },
  Number: {
    name: 'Number',
    label: 'number',
    type: Number,
    reactClass: StringElement
  },
  Boolean: {
    name: 'Boolean',
    label: 'yes/no',
    type: Boolean,
    reactClass: BooleanElement
  },
  Array: {
    name: 'Array',
    label: 'array',
    type: [],
    reactClass: ArrayElement
  }
};

export default datatypes;
