# React Router

Using react-router-dom v6, upgrading from 5

## Set Up

Verify you have installed the correct version of react-router-dom.

### `Switch & Exact Matches`

Upgrade all `<Switch>` cases to `<Routes>` and no need to explicitly call 'exact' paths, as this is the default now.  

### `Links & NavLinks`

The `<Link>` renders an accessible `<a>` element with a real `href` that points to the resource it is linking to. This means that right-clicking a `<Link>` works as you would expect.

A `<NavLink>` is a special kind of `<Link>` that knows whether or not it is "active". This is useful when building navigation menus and tabs. It also provides useful context for assistive technology.

By default, an `active` class is added to a `<NavLink>` component when it is active. In version 6, `activeClassName` and `activeStyle` have been removed. Instead you pass a function to either `style` or `className`.

### `Fetching Data`

Created a custom fetch data hook to grab articles from the db.json file. Using json-server package, running and serving the db file. This becomes the api endpoint: `http://localhost:3000/articles`

### `Route Parameters`

Added a 'read more' link to the articles and routing that link to a details page for the article. These routes will look like: `/articles/:id` where the :id part is a changeable route parameter.

### `The useParams Hook`

The `useParams` hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the path. Child routes inherit all params from their parent.

### `Programmatic Redirects`

Replace `useHistory` with `useNavigate` for version 6 and change `history.push` and `history.replace` callsite. For details, please read [**Upgrading from v5**](https://reactrouter.com/docs/en/v6/upgrading/v5)

### `Redirect Component`

The `<Redirect>` element is no longer supported as part of the route config inside `<Routes>` for v6. You can do a redirect inside a `useEffect`. Instead, a wildcard character and element seem to do the trick.

### `Query Parameters`

The `useLocation` hook is being used to get a query string from the path in the browser.

