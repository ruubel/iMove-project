import React from 'react'
export default function sendPost(){
	return (
	{function load(obj,url, onload) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status === 200) {
            obj.data = JSON.parse(xhr.responseText);
            onload();
        }
    };
    xhr.send();
}}
	)
}