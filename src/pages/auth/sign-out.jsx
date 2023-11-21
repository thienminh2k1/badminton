import { signOut } from 'firebase/auth'
import { auth } from '../../../firebase/firebaseConfig'
import { useNavigate } from 'react-router-dom'

const SignOut = () => {
    const history = useNavigate()

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                history('/auth/sign-in')
                localStorage.clear()
                // window.location.reload()
            })
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div x-data="{ showModal: true, email: '' }">
                <div x-show="showModal" className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div x-show="showModal" x-transition:enter="transition ease-out duration-300 transform" x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100" x-transition:leave="transition ease-in duration-200 transform" x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100" x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" className="fixed z-10 inset-0 overflow-y-auto" >
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="w-full inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline"> Sign out </h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500"> Are you sure you would like to sign out of your account? </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button onClick={handleSignOut} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700  sm:ml-3 sm:w-auto sm:text-sm"> Sign out </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SignOut
