var user1 = {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpeg',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

var user2 = {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    joinedDate: 'July 2009',
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: 'assets/billgates.jpg',
    coverPhotoURL: 'assets/billgates-cover.jpeg',
    tweets: [
        {
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

let user = user1;


let coverPic = document.getElementById('coverPic')
coverPic.src = user.coverPhotoURL;
coverPic.alt = user.displayName + ' cover pic';

let joinDate = document.getElementById('joined');
joinDate.innerHTML = `
    <i class="bi bi-calendar3"></i>
    Joined ${user.joinedDate}
`;

let following = document.getElementById('following');
following.innerText = user.followingCount;

let followers = document.getElementById('followers');
followers.innerText = user.followerCount;


let tweetsArr = user.tweets;

for (let i = 0; i < tweetsArr.length; i++) {

    let tweet = document.createElement('div');
    tweet.classList.add('tweet');
    tweet.innerHTML = `
        <div class="circularBox">
            <img src="" alt="" class="userPic">
        </div> 
    
        <div class="tweetContent">
            <div class="tweetHeading">
                <div class="tweetName">
                    <h3 class="userName"></h3>
                    <p class="nameTag"></p>
                    <p>&nbsp;·&nbsp;</p>
                    <p>${tweetsArr[i].timestamp}</p>
                </div>
                <i class="bi bi-three-dots"></i>
            </div>
        
            <p>${tweetsArr[i].text}</p>
            <div class="tweetFooter">
                <div>
                    <i class="bi bi-chat"></i><span> 5.2K</span>
                </div>
                <div>
                    <i class="fas fa-retweet"></i><span> 7.7K</span>
                </div>
                <div>
                    <i class="bi bi-heart"></i><span> 65.2K</span>
                </div>
                <div>
                    <i class="bi bi-upload"></i>
                </div>
            </div>
        </div>
    `;
    
    let bottomContainer = document.getElementById('bottomContainer');
    bottomContainer.appendChild(tweet);

}



let userPic = document.getElementsByClassName('userPic');
for (let i = 0; i < userPic.length; i++) {
    userPic[i].src = user.avatarURL;
    userPic[i].alt = user.displayName + ' user pic';
};

let userName = document.getElementsByClassName('userName');
for (let i = 0; i < userName.length; i++) {
    userName[i].innerText = user.displayName;
    let check = document.createElement('i');
    check.classList.add('bi');
    check.classList.add('bi-patch-check-fill');
    userName[i].appendChild(check);
};

let nameTag = document.getElementsByClassName('nameTag');
for (let i = 0; i < nameTag.length; i++) {
    nameTag[i].innerText = user.userName; 
};