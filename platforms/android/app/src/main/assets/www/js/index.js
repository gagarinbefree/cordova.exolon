/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
            console.log("support", $.support.touch ? "tap" : "click")

            document.getElementById('keyfire').addEventListener('touchstart', function(){
                window.dispatchEvent(new KeyboardEvent('keydown',{keyCode: 32, which :32}));   
            }, true);
            document.getElementById('keyfire').addEventListener('touchend', function(){
                window.dispatchEvent(new KeyboardEvent('keyup',{keyCode: 32, which :32}));   
            }, true);
            

            // $('#keyfire').mousedown(function(e) {

            //     console.log('keydown');

            //     window.dispatchEvent(new KeyboardEvent('keydown',{keyCode: 32, which :32}));   
            // });
            // $('#keyfire').on('mouseup', function(e) {
            //     window.dispatchEvent(new KeyboardEvent('keyup',{keyCode: 32, which :32}));                       
            // });


            // $('#keyfire').on('click', function(e) {

            //     console.log("key fire click", e);

            //     window.dispatchEvent(new KeyboardEvent('keydown',{keyCode: 32, which :32}));   

            //     setTimeout(function() {
            //         window.dispatchEvent(new KeyboardEvent('keyup',{keyCode: 32, which :32}));                       
            //     }, 50);
            // });

            /*btn.addEventListener('keydown', function(e) {
                var e = new KeyboardEvent('keydown',{keyCode: 32, which :32});            
                //window.dispatchEvent(e);   

                console.log('keydown', e);
            });

            btn.addEventListener('keyup', function(e) {
                var e = new KeyboardEvent('keyup',{keyCode: 32, which :32});            
                window.dispatchEvent(e);       

                console.log('keyup', e);
            });*/


            /*$('#firebutton').keydown(function() {
                var e = new KeyboardEvent('keydown',{keyCode: 32, which :32});            
                window.dispatchEvent(e)                    

                alert('keydown');
            });

            $('#firebutton').keyup(function() {
                var e = new KeyboardEvent('keyup',{keyCode: 32, which :32});            
                window.dispatchEvent(e);    
            });*/


    },    

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        /*var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);*/
    }
};

app.initialize();