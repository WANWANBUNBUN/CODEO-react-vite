export default function ProfileMain() {
    return (
        <>
        <main className="flex flex-col items-center justify-center text-white">
        
        <div className="mt-48 mb-10 justify-start">
          
          <h2 className="p-1">Statistic</h2>
          <div
            id="statistic"
            className="rounded-2xl h-36 w-72 p-9 shadow-sm bg-white mt-2 opacity-90"
          ></div>
          
          <div id="setting" className="mt-2">
            <h2 className="p-1">Setting</h2>
            <a href="account.html">
              <div
                className="bg-white mt-2 rounded-full w-72  text-center py-2 cursor-pointer text-black font-bold"
              >
                <h3 className="">Account Edit</h3>
              </div></a>
            
           
            <div
              className="bg-white rounded-2xl w-72 text-start py-2 cursor-pointer text-black font-bold p-6 mt-2"
            >
              <div className="flex justify-between items-center">
                <h3>Reminder</h3>
                <input
                  type="checkbox"
                  v-model="isReminderToggled"
                  className="p-inputswitch-input"
                  aria-checked="true"
                  data-pc-section="input"
                />
              </div>
              <div className="flex justify-between items-center">
                <h3>Sound</h3>
                <input
                  type="checkbox"
                  v-model="isSoundToggled"
                  className="toggle-checkbox"
                />
              </div>
            </div>
            
            <a href="contact.html">
              <div
                className="bg-white mt-2 rounded-full w-72  text-center py-2 cursor-pointer text-black font-bold"
              >
                <h3>Contact</h3>
              </div></a
            >
          </div>
        </div>

        
        <a href="x">
          <button
            className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full mb-20"
          >
            Sign out
          </button>
        </a>
      </main>
      </>
    );
  }