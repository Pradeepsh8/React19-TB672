---TB672---

Lab Requirement
-NodeJS
-Visual Studio Code
-Visual Studio Community Edition 2022  v17

---Day 1---
Javascript is dynamic scripting language

var i = 10;
i = 'pradeep';

function add(x,y){
  return x+y;
}
add(1,2); //3
add(1);    //NaN
add();		//NaN

undefined & null
var a;
console.log(a); //undefined
=10; 

Hoisting
- Scans the js code & moves the declaration on the top

NodeJS
- Its a Javascript runtime environment
- open-source, cross-platform
- Tool witih in NodeJs called NPM (Node Package Manager)

NPM 
- Used to downloaded /share the js/css packages from public repository
- It resolves inter dependencies
- It can read package.json
> npm install <packageName>@<version>


HTML - W3C
Javascript - EcmaScript (Guidelines /rules for scripting language)

IE11 - ES5
Chrome, Edge, Mozilla - ES6+

let - Blocked scope, doesnt support hoisting
var - Function/global scope, support hoisting

named function, anonymous function, arrow function

class, module, set, map(), rest, spread, destructuring

---Day 2---

ReactJs
-JS library used for creating reusable UI components
-Known for speed, simlicity, scalability
-Developed by Meta

Advantages
- Easy to learn & use
-Uses Virtual DOM to improve performances
-Unidirectional databinding
-Developer tools

Version history
0.3.0 May13
...
15 Apr16
16 Sep17
18 Mar22
19 Dec24

Vite
- A build tool for faster development
- Spin up the dev server 

>npm create vite@latest <projectName> -- --template react
>cd <projectName>
>npm install
>npm run dev    //vite

>vite dev
=Started the development server => vite served the files as ES modules by dynamically transforming jsx to js.

>vite build
=Optimize the code  => Transforms JSX to JS => Performs TRee shaking & Code splitting => Minification & Optimization => create output

Component is a building block of react application
Types of components
- Class Component

- Function Component

JSX 
- Mix of JS & HTML
-Follow camelcasing convention
-JSX helps to create Virtual DOM by returning HTML

React Fragments
-Group all the html elements in between tag
  <></>
  <div></div>
  <React.Fragment></React.Fragment>
  <StrictMode></StrictMode> 
  -A helper component that helps to write better react code by having additional checks to identify potential risk & prevent from side effect
  
Databinding
- A mechanism to bind data values to HTML elements
- Support one way data binding {}
- useState hook should be used for maintaining state supporting 2 way binding
- useRef - Hook that is used to get reference to a DOM node

Virtual DOM
- A memory representation of the DOM and sync with the real DOM by using a package called ReactDOM
- React will updates only the necessary part when changes occurs
- Improves the performance of your application

uesEffect
- A function that run the code based on dependencies provided
- It will automatically trigger based on state changed
 useEffect(()={
	//logic
 }, [dependencies])
 
 ---Day 3---
 
 Bootstrap
 - Framework for designing responsive UI
 >npm install <bootstrap> --save'
 
 
 props
 -Refers to react component properties
 -Allows to pass data from 1 component to other
 
Routing
- Serving the component/webpage based on request matching url

Steps to implement Routing
- Add a npm package 
> npm install react-router-dom --save
-Create a <Layout/> component & add a BrowserRouter  tag
   <BrowserRouter>
    </BrowserRouter>
- Define the Routes within BrowserRouter tag
  <Routes>
                <Route path="/databinding" element={<Databinding />} />
 </Routes>
- Add a component for creating Navlinks 
   <NavLink className='nav-link' to="/databinding" >Data Binding</NavLink>
   
 ---Day 4---
 
 Reading route param from url
 const {id} = useParams();
 
 Reading querystring parameter from url
  const location = useLocation();
   const queryParams = new URLSearchParams(location.search);
   const city = queryParams.get("city");
   
  Navigating from one component to another
  const navigate = useNagivate();
  navigate('/products');
  
Uncontrolled Form 
-Means that form elements (like <input>, <textarea>, <select>) do not store their state in React but instead rely on the DOM itself. 
-We use refs to access the values directly

Controlled Form 
-Means that form elements (like <input>, <textarea>, <select>) do store their state in React.

Lazy loading
-Download the component on demand based on requested url
- Add a  <Suspense fallback={<div>Loading......</div>}> component which will make sure untill component is downloaded will show fallback element
-Define the route using lazy() method
   const Databinding = lazy(()=> import('./Databinding'));

 ---Day 5---
 Formik & yup
 - Its a ligheweight easy to use react form library that simplifies form state management, validation, and handling form submission
 - Known for simplicity, handles form state, built in validation

 >npm install formik --save
 >npm install yup --save
 
 Steps to implement Formik form
 -Create a Formik tag ans set the initial model & handle submit
  const productForm = {
        productId: "",
        productCode: "",
        productName: "",
        price: 0,
        categoryId: 0
    }
   <Formik initialValues={productForm}
          enableReinitialize={true}
          onSubmit={(frm) => handleSaveProduct(frm)}></Formik>
				
-Add input elements within <Form> tag
   <Field name="productCode" className="form-control"></Field>
-Add validation using Yup package and create validationschema 
      const validateSchema = Yup.object({
        productCode: Yup.string().required('Product Code is required'),
        productName: Yup.string().required('Product Name is required')
            .matches(/^[a-zA-Z0-9 ]+$/, "Product Name is invalid"),
        categoryId: Yup.string().notOneOf(["0"], "Select a valid category"),
        price: Yup.number().required('Price is mandatory')
    })
- Pass the schema object to Formik 
  validationSchema={validateSchema}
- Show errormessage using <ErrorMessage /> tag
   <ErrorMessage className="text-danger" component="label" name="productCode" />

 ---Day 6---
 Context api
 - Context provided a way of passing data through the component tree without hving to pass props down manually at evey level
 -Its useful for eliminating props drilling issue
 -It maintain global state
 
 Steps to implement Context API
- Use createContext() to define your context
	export const UserContext = createContext(null);

- Create a component "UserProvider" to provide the Context.
   export function UserProvider({children}){
   
   const [currentUser, setCurrentUser] = useState()
   
    return(
        <UserContext.Provider value={{currentUser}}>
            {children}
        </UserContext.Provider>
    )
	}
- Wrap Your App with the Provider in Layout.jsx or App.jsx
    <UserProvider>
        <Navbar />
        <Suspense fallback={<div>Loading......</div>}>
          <Routes>
            <Route path="/databinding" element={<Databind />} />
		 ....
    </UserProvider>
- Consume the context in child component using useContext() hook
   const { currentUser} = useContext(UserContext);
   
 fetch api for http request -alternative of axios
 
 Axios 
 -Js library used to make http request from browser
 -It has the ability to cancel request
 -It has feature of interceptor 
 >npm install axios --save
 
 CRUD operation using WebAPI
 
 ---Day 7---
 Nesting of routes
  <Route path="/databinding" element={<Databinding />}>
                            <Route path="personal" element={<Child1 />} />
                            <Route path="education" element={<Child2 />} />
    </Route>
	
	Use <Outlet/> in parent component to load child component
 
Functional vs class component

useState        							this.state = { filteredProducts: [] }
useEffect({},[]) 							 componentDidMount()
useEffect({}, [dependencies])	 componentDidUpdate()
useEffect({  								 componentWillUnMount()

	return (()=>{
	})
})
useContext 								static contextType = UserContext;   
												const {currentUser} = this.context;
useRef 										addressRef = React.createRef(); 		
												this.addressRef.current.style.color = "red";
				
 ---Day 8---				
 Redux - A single centralized way for maintaining global state in the application. It allows specific pattern to follow & update the state.


Action 
- A javascript object that has a type & a payload
   FILTERPRODUCT, payload: {searchText: "sdas", selectedCategory: "1" }
   
   export const ProductAction = {
    filterAction: createAction("product/FILTER"),
    setSearchAction: createAction("product/SEARCH"),
   }

Reducer
- A function that receives the current state and a action as argument. It can update the current state & create a new state
- It act like a event listener which handles event based on action provided

	export const productReducer = createReducer(initalState, (builder)=>{
    builder.addCase(ProductAction.filterAction, (state, action)=>{
        const {searchText, selectedCategory, productList} = state;

        let filtered = selectedCategory
                    ? productList.filter(f => f.categoryId === Number(selectedCategory))
                    : productList;
        
                filtered = searchText
                    ? filtered.filter(f => f.productName.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) !== -1)
                    : filtered;

        state.filteredProducts = filtered;
    })
	
Store
- Maintains the current state of object
	const store = configureStore({
    reducer: {
        productReducer,
        categoryReducer
    }
})

Wrap the Provider around the <App/> in main.jsx where you wish to use the store
<Provider store={store}>
      <App />
    </Provider>

Dispatcher
- Store is having one method called as dispatch. Calling dispatch is the only way to pass the action to store
	 store.dispatch(setSearchAction({category: e.target.value}));
	 
 ---Day 9---	
 useEffect: side effect function for any state changes
 useMemo - Returns the memoized value. Performance optimization of some expensive calculation
 useCallback - Returns the memoized function
 
  ---Day 10---	
ErrorBoundary
  - React component throws error that can break ui & show white screen. to avoid showing white screen & gracefully handle them & dispplay view
  
class ErrorBoundary extends Component
{
    constructor(props){
        super(props);
        this.state = { hasError: false, errorMessage: ""  };
    }
    static getDerivedStateFromError(error){  
       return { hasError: true };     
    }

    componentDidCatch(error){
        //log error in db
        this.setState({ errorMessage: JSON.stringify(error) });
        console.log('Print Error=' + error);
    }

    render(){
        if(this.state.hasError){
            return <h4>Something went wrong. Try again later. {this.state.errorMessage} </h4>
        }
        return this.props.children;
    }
}
export default ErrorBoundary;

Wrap in main.jsx
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
    </ErrorBoundary>

Testing
Unit testing (Developer) - Integration Testing (Developer) - System Testing (QA) - UAT (Business)

Unit Testing
- Testing smallest unit of code in an isolated manner
- No external system should be a part of unit testing

function add(x,y)
{
	return x+y;
}

//test suites
describe('Test add method', () => {

	//test case
	it('Pass x>0,y>0 returns result > 0', () => {
		//Arrangement
		let a =1, b=2;
		
		//Act
		let result = add(a,b);
		
		//Assert
		expect(result).toEqual(3); //matchers
	})
	
	it('Pass x<0,y<0 returns result < 0', () => {
		//Arrangement
		let a =-1, b=-2;
		
		//Act
		let result = add(a,b);
		
		//Assert
		expect(result).toEqual(-3); //matchers
	})
}) 


Setup & Teardown methods
beforeEach()
beforeAll()
afterEach()
afterAll()

  ---Day 11---	
  
  
  public 
   - signup
   - signin
   - Movie
   - /shared 
         -header
		 -navMenu
		 -Layout

  admin
  - settings
  -/shared
		-header
		-navMenu
		-adminLayout
  
  user
  - personalInfo
  -subscription
  - /shared  
		-header
		-navMenu
		-userLayout
		
  services
   - authService
   - movieService
   
   helpers
   - hooks
   -axiosclient
   
  ---Day 12---	
  