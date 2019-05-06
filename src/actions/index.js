
export function logged(flag) {
    return {
      type: 'LOGGEDIN',
      flag
    }
  }
  

export function selected(planet) {
    return {
      type: 'PLANET',
      planet
    }
  }

  export function logout(flag) {
    return {
      type: 'LOGOUT',
      flag
    }
  }

  export function listupdate(val) {
      return {
          type: 'UPDATE',
          val
      }
  }
  

  