class UserInfo {
  constructor(container, api) {
    this.api = api;
    this.nameLabel = container.querySelector(".user-info__name");
    this.aboutLabel = container.querySelector('.user-info__job');
    this.avatarElement = container.querySelector('.user-info__photo');       
  }

  load() {
    this.api.getUserInfo()
      .then(r => {
        this.nameLabel.textContent = r.name;
        this.aboutLabel.textContent = r.about;
        this.avatarElement.style.backgroundImage = r.avatar;
      });
  }

  name() {
    return this.nameLabel.textContent;
  }

  about() {
    return this.aboutLabel.textContent;
  }

  edit(name, about) {
    this.nameLabel.textContent = name;
    this.aboutLabel.textContent = about;

    this.api.editUserInfo(name, about);
  }  
}

export {UserInfo};