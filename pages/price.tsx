import React from 'react'
import HeaderCompoent from '../components/header'

class about extends React.Component {
  render() {
    return (
      <div>
        <div className="  flex  justify-center ">
 
          <div className="flex  2xl:my-5 justify-center 2xl:space-x-16 space-x-8  items-center h-screen text-white text-center  ">
            <div className="mt-10xl:mt-7  bg-gradient-to-b from-purple2 to-purple3 2xl:h-[680px]  2xl:w-[380px] xl:h-[560px]  xl:w-[330px]  lg:h-[400px]  lg:w-[300px] rounded-xl ">
              <svg className="pt-4 w-1/3 mx-auto" viewBox="0 0 164 139">
                <rect width="164" height="139" fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      href="#image0_183_22"
                      transform="matrix(0.00613497 0 0 0.00723838 0 -0.00306748)"
                    />
                  </pattern>
                  <image
                    id="image0_183_22"
                    width="163"
                    height="139"
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACLCAYAAAANkynbAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAiISURBVHhe7Z09jFVFHMWfln5gZ+FHoY0mYuciQseuKIVihEg0akIECkl8FhhIUApXjOiasCSuiWAsNIoGjR+FSICSqNi5JthoImKiHetHq+/cnY3wdu+++793Zv7/mTm/xHAH1rewc+7MnJkzM1f8O6BHiAGudL8Sog7FSMxAMRIzUIzEDBQjMQPFSMxAMRIzUIzEDBQjMQPFSMxAMRIzUIzEDBQjMQPFSMxAMRIzUIzEDAzXBuLin3/3Dr/7efW8/YkHe9dde3X1TOqhGAMAIU5s7vfOX/ijKt984/W9k8emKcgRsJsOAFrEBSECPC+0kqQetoyegfDG7tvmSpdz9qsjVStJloYto2f6z0+7p8Us92eEYvTKmbPfV//VgT/78tTXrkSGYTftEXTPl44VlwLdNLprshi2jJ6YmvlgpBABvgZfSxZDMXpA6paH3TaZh2L0wGsz71dzi03B1+57lV31MBRjR2BKPvrstCs1B0ZmObNTIjQwHZnY/Gxv9txPriSDZuZy2DJ24K3B2K+tEAHGjfgMMg9bxpZg3Ldq/TbRWHEpsF797YkjXLcewJaxJVNvyExLHfiMF1457EplQzG2AF3z4fe+cKXuwADRzFCMrdh34G335I+pmaPuqVwoRiEffnoqSCuGz8RnlwwNjABfpqWO0s0MW0YBWMYLJUSAz4YxKhW2jA3BnGBdaNY3pYZw2TI2JGYwttQQLsXYAJiLmFMv+F4lhnApxgacOTvrnuKBVE/I8alFKMYGdFl/bos0I5kDFGMD1ozd6Z7iUloIl2JswIZ1q91TXNBNlxTCpRgbgGmWXU8/6kpxKSmEy3nGhqCVGt/U7/36W/xus5QQLlvGhmCJbnJ3nEnvYTBuLGFHIcUoYMP46t49d610pbiEXoq0AMUoZHKPTusIIeYewqUYhay8/dbe9scfcKW45B7CpYFpAVqpsXuf6s399Y/7nXjgZTh57KAr5QVbxhZUZmbPdleKC1aDcg3hsmXsAKZ6fvjxZ1eKR64hXLaMAzAOw9QJNllJHKummckxhFt8y4huD6dCLIB16E/e2e9Ko3lm78FWx5v4AGNHjCFzofiWcXinnzRLiLHjimuucqW4hNilqEnRYqzb6SfJEmLctuPJja4UF+mLY51ixQix7Tuw9HqvNEuIEMVNN+jsWckphFusGEcdT9L0JNoFDu3vu6e45BTCLVKMVQU2OJ5EkiWE8bl/3d2uFBfpi2OVIsXYdPedNEs4uVtnIhzkEMItToxSgUm2jTKE242ixFiZFmELgu5PkiXEpZVaZib1/dZFibHtBifJ/8cQbnuKEWOXikKLihsNmqIdwm3zwlmgGDF2HeBLs4Sa69aSF8cSRYjR10qFZPmNIVw5RYjR18AeoQrJ7QS7dj7GdWsB2YvR94Tw64PPa7r8ph3CTe1aj6zFCNH4XirDZ0qyhFseGlczM5IXxwJZixG76UJUBpYSJYdBPbdTZyJc+uJok60YMYAPGXqVjMmwbv3IxnWuFBfpi6NJtmIMPYCH2CUboxjCHU2WYoRIYrQGyEM2HQbAzMBdayB9cbTITowQR11o1jf4XhKDtENx3XrqTftmJjsxjgrN+gZTR5LvxxBuPVmJEV2zzzv9mnJcsLrDEG49WYlRa6B+XnhmI0K4WmbGcswsGzFqhkvXjMkmtRHC1dxRqPVzGkUWYqxMi1LsHoakzQH0DOEuJgsxamb42hoShnAXk7wYNX+wMCJtWsUFGMK9nOTFqLkrzsduwEP7/z/nJyaaQ5s6khYjBuI+QrNtwC5AHzef4jO0QrjWdhQmfQoZrtzV6GpgPE59PF2N+3yAVoon4SbcMmpO4MJ4+BIiYAh3niTFCBFqLW3BcMB4+IYh3ETFiN1vWj+8kLv+Sg/hJidGDLi1ToqF0Qh5UiymibTMzOy5+GeTD5OcGLXWn7GWHCOPiLGjRpBi7Sqda4wvJSk3jYF2rKziMNMv9atxXSzm15BnK4NxcS7ckARTS2sHLXLMf1sdyYgR45pV67epjBXvuO2WaiqHhCWZbjp2aPZStI4qKY0kxKgVmgXY1ddl/Zk0JwkxapoWrcnoEjEvxrrrMWKAAKzPlRayPKYNDMaIE5v7auvP352wlWrJHdMtY4qhWdIes2KECFMNzZJ2mBWj5j4NzSs0SsbkmBGG5eGte10pLgjNSq/PwFr5Lxd+d6X82LJx3EuQeBQmxZhKaBbzn1v7L6uNa2OCo1leDLyBzFw3nUpoFk5/06D1LkGIALmA0CFcU2JExaYSmg11EKllEMIN+fKZEmMqoVl0z1qZSk1QNyF3FJoRY0qh2VQO3wxByB2FZsSYSmhWc3nSCqHqyoQYMTBG16cBghAS06IV7rUE6iqEmVEXIyoYA2MNEJqVJJxhrkozLXWE2FGoLkZNVyoxLXCRFg9L0gJ1hrrziaoYNV2pNDSb+l3OIUDd+RxeqYoxldCstTNpLOGzDtXEqOlK4Z5FpsXYaV2WQB36utZDRYxVBSu5Uqw/Y521KRbPMbSG5D6c5VARo6YrlYRmNZcnUwJ16ePnFF2Mmq5UGppF96z10qSGj4BLdDFqudLKtAhCsxgLaR1Emipd6zaqGDVdKXb6SQKinMqR0/UFjipGLVcK04KrLpqCpS6alnZ0qeNoYkwpNKu1PJkDXTxBFDHiL6jlShmajU/b6bAoYtR0pZKrLTDmKTE06xvUdZvuOrgYNV0pQrMS0zI1c9Q9ka60MavBxahVwQzN6iNdt47SMmowPeiem5oWIL2ml4xGmugJLkZEtWKD/b3S6zGwUZ34RVr3UTbxY95uLpKB6XL6Ad7k46e/cSXShRWDXkkSSAHJnOlN8ifK1A4hTaAYiRkoRmIGipGYgWIkZqAYiRkoRmIGipGYgWIkZqAYiRkoRmKEXu8/8pLCbuLG98gAAAAASUVORK5CYII="
                  />
                </defs>
              </svg>

              <h5 className=" text-2xl pt-1">Basic</h5>
              <p className="font-prompt text-sm pt-3">
                Basic 1-3 Pages • Template <br />
                Design • SSL Certificate <br />
                • 1 Year Hosting <br />
                <p className="text-5xl tracking-[0.1rem] font-bold pt-3 ">
                  200
                </p>{' '}
                <br />
                <button className="bg-white my-2 hover:brightness-90  text-purple3 font-bold py-3 px-4 rounded-lg w-2/5 h-3/12">
                  Select
                </button>
              </p>
            </div>
            <div className="bg-gradient-to-b from-blue1  to-blue2   flex-row 2xl:h-[680px]  2xl:w-[380px] xl:h-[630px]  xl:w-[330px] lg:h-[550px]  lg:w-[300px] shadow-2xl rounded-xl ">
              <svg className="pt-4 w-1/3 mx-auto" viewBox="0 0 164 139">
                <rect width="164" height="139" fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      href="#image0_183_22"
                      transform="matrix(0.00613497 0 0 0.00723838 0 -0.00306748)"
                    />
                  </pattern>
                  <image
                    id="image0_183_22"
                    width="163"
                    height="139"
                    href="data:image/png;base64,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"
                  />
                </defs>
              </svg>
              <h5 className=" text-2xl pt-3">Standard</h5>
              <p className="font-prompt text-sm pt-6">
                Standard 1-8 Pages • Custom <br />
                Design • Basic SEO <br />
                • Social Media Integration <br />
                <p className="text-5xl tracking-[0.1rem] font-bold pt-3 ">
                  800
                </p>{' '}
                <br />
                <button className="bg-white my-2 hover:brightness-90  text-blue2 font-bold py-2 px-4 rounded-lg w-2/5 h-3/12">
                  Select
                </button>
              </p>
            </div>
            <div className="mt-10 xl:mt-7   bg-gradient-to-b from-blue3 to-blue4 shadow-3xl 2xl:h-[680px]  2xl:w-[380px]  xl:h-[550px]  xl:w-[330px]  lg:h-[400px]  lg:w-[300px] rounded-2xl">
              <svg className="pt-4 w-1/3 mx-auto" viewBox="0 0 164 139">
                <rect width="164" height="139" fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      href="#image0_183_22"
                      transform="matrix(0.00613497 0 0 0.00723838 0 -0.00306748)"
                    />
                  </pattern>
                  <image
                    id="image0_183_22"
                    width="163"
                    height="139"
                    href="data:image/png;base64,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"
                  />
                </defs>
              </svg>
              <h5 className=" text-2xl pt-1">Creator</h5>
              <p className="font-prompt text-sm pt-3 ">
                Creator 8+ Pages • Custom <br />
                Content • Logins & <br />
                Accounts • Advanced SEO <br />
                <p className="text-5xl tracking-[0.1rem] font-bold pt-3 ">
                  1100
                </p>{' '}
                <br />
                <button className="bg-white my-2 hover:brightness-90  text-blue4 font-bold py-2 px-4 rounded-lg w-2/5 h-3/12">
                  Select
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about
