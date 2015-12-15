import { assignProviders } from 'react-redux-provide';
import history from '../src/index';
import provideList from 'react-redux-provide-list';
import Test from './components/Test';
import Link from '../src/components/Link';

const list = provideList();
const initialState = {
  list: [
    {
      href: '/test-one',
      hrefTitle: 'Test One'
    },
    {
      href: '/test-two',
      hrefTitle: 'Test Two'
    }
  ]
};

window.location.href = 'http://localhost:8080/test-index';
document.title = 'Testing';

assignProviders(initialState, { history, list }, {
  Test,
  Link
});
