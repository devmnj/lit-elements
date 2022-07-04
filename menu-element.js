import { LitElement,css,html } from 'lit';

export class MenuElement extends LitElement {
    static styles = css `
    @import url(http://weloveiconfonts.com/api/?family=entypo|fontawesome);
    /* entypo */
    [class*="entypo-"]:before {
      font-family: 'entypo', sans-serif;
    }
    /* fontawesome */
    [class*="fontawesome-"]:before {
      font-family: 'FontAwesome', sans-serif;
    }
    
    * {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }
    
    body {
        background: #d3d4d6;
    }
    a {
        text-decoration: none;
        font-family: sans-serif;	
        font-weight: bold;
    }
    span {
        font-size: 20px;
        font-weight: normal;
        padding-right: 16px;	
    }
    
    #main-container {
        width: 310px;
        height: 330px;
        margin: 3em auto;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        -webkit-box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
        -moz-box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
    }
        .tab {
            width: 310px;
            height: 55px;
            -webkit-transition: background .1s ease-out;
            -moz-transition: background .1s ease-out;
            -o-transition: background .1s ease-out;
            -ms-transition: background .1s ease-out;
            transition: background .1s ease-out;
        }
            .tab h3 {
                margin: 0 0 0 20px;
                line-height: 50px;
                cursor: pointer;
                font-size: 16px;
                font-family: sans-serif;
                display: inline-block;
                float: left;
                -webkit-transition: color .1s ease-out;
                -moz-transition: color .1s ease-out;
                -o-transition: color .1s ease-out;
                -ms-transition: color .1s ease-out;
                transition: color .1s ease-out;
                }
                .notification {
                    display: inline-block;
                    width: 39px;
                    line-height: 24px;
                    float: right;
                    margin: 15px 15px;
                    text-align: center;
                    color: #ffffff;
                    font-size: 11px;			
                    -webkit-border-radius: 25px;
                    -moz-border-radius: 25px;
                    border-radius: 25px;
                    -webkit-transition: background .1s ease-out;
                    -moz-transition: background .1s ease-out;
                    -o-transition: background .1s ease-out;
                    -ms-transition: background .1s ease-out;
                    transition: background .1s ease-out;
                }
        .tabSelected {
            background: #df4f37;
        }
            .tabSelected h3 {
                color: #ffffff;
            }
            .tabSelected .notification {
                background: #c9412b;			
            }
                .tabSelected .notification:hover {
                    background: #B33923;
                }
        .tabNoSelected {
            background: #ffffff;
            border-bottom: solid 1px #e6e6e6;	
        }
            .tabNoSelected:hover {
                border: solid 1px #F2F2F2;
            }
            .tabNoSelected h3 {
                color: #363a3d;
            }
            .tabNoSelected .notification {
                background: #dcdddf;
            }
                .tabNoSelected .notification:hover {
                    background: #2eb398;
                }
        .tabBody {
            background: #e7604a;
            width: 310px;
            height: 110px;
            display: none;
            border-top: solid 1px #eb806c;
        }
            .tabBodyOptions {
                list-style-type: none;
                padding: 0;
                margin: 0;
            }
            .tabBodyOptions a {
                display: block;
                color: #fce7e4;
                font-size: 13px;
                line-height: 32px;
                width: 310px;
                padding-left: 20px;
                -webkit-transition: background .3s ease-out;
                -moz-transition: background .3s ease-out;
                -o-transition: background .3s ease-out;
                -ms-transition: background .3s ease-out;
                transition: background .3s ease-out;
            }
                .tabBodyOptions a:hover {
                    background: #df4f37;
                    color: #ffffff;
                }
            .tabBodyOptions span {
                font-size: 18px;
            }
    
  
    `;
    render() {
        return html` 
        <!-- Design by Aykut Yılmaz: http://drbl.in/ikPx -->

<body>              
        <div id="main-container"> <!-- Main Container -->

            <div id="dashboard" class="tab tabNoSelected"> <!-- Dashboard -->
                <h3><span class="entypo-gauge"></span>Dashboard</h3>
                <a href="#1" class="notification">1</a>
            </div>
            <div id="dashboardBody" class="tabBody">
                <ul class="tabBodyOptions">
                    <li><a href="#10"><span class="entypo-phone"></span> Calls</a></li>
                    <li><a href="#11"><span class="entypo-chart-line"></span>Chart</a></li>
                    <li><a href="#12"><span class="entypo-map"></span>Map</a></li>
                </ul>                
            </div>

            <div id="profile" class="tab tabNoSelected"> <!-- Profile -->
                <h3><span class="entypo-vcard"></span>Profile</h3>
                <a href="#2" class="notification">8</a>
            </div>
            <div id="profileBody" class="tabBody"> 
                <ul class="tabBodyOptions">
                    <li><a href="#20"><span class="fontawesome-user"></span> User</a></li>
                    <li><a href="#21"><span class="entypo-user-add"></span>Add contact</a></li>
                    <li><a href="#22"><span class="entypo-calendar"></span>Calendar</a></li>
                </ul>                
            </div>

            <div id="messages" class="tab tabSelected"> <!-- Messages -->
                <h3><span class="entypo-mail"></span>Messages</h3>
                <a href="#3" class="notification">14</a>         
            </div>
            <div id="messagesBody" class="tabBody">
                <ul class="tabBodyOptions">
                    <li><a href="#30"><span class="entypo-inbox"></span>Inbox</a></li>
                    <li><a href="#31"><span class="entypo-paper-plane"></span>Sent</a></li>
                    <li><a href="#32"><span class="entypo-trash"></span>Deleted</a></li>
                </ul>                
            </div>

            <div id="settings" class="tab tabNoSelected"> <!-- Settings -->
                <h3><span class="entypo-cog"></span>Settings</h3>
                <a href="#4" class="notification">16</a>                
            </div>
            <div id="settingsBody" class="tabBody">
                <ul class="tabBodyOptions">
                    <li><a href="#40"><span class="fontawesome-beer"></span> Fill Beer</a></li>
                    <li><a href="#41"><span class="entypo-adjust"></span>Adjust</a></li>
                    <li><a href="#42"><span class="entypo-bell"></span> Alarm</a></li>
                </ul>                
            </div>

        </div> <!-- Main Container END -->
</body>
        
        `;
    }
}
customElements.define('menu-element', MenuElement);
