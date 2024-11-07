<script type="module">
    // Import server URI and standard fetch options
    import { pythonURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';

    /**
     * Fetch groups for dropdown selection
     * User picks from dropdown
     */
    async function fetchGroups() {
        try {
            const response = await fetch(`${pythonURI}/api/groups/filter`, {
                ...fetchOptions,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ section_name: "Rate and Relate" }) // (edit) Adjust the section name as needed
            });
            if (!response.ok) {
                throw new Error('Failed to fetch groups: ' + response.statusText);
            }
            const groups = await response.json();
            const groupSelect = document.getElementById('groupId'); 
            groups.forEach(group => {
                const option = document.createElement('option');
                option.value = flavor.fusion; // (edit) Use group name for payload // (edit) group.name = flavor.fusion
                option.textContent = flavor.fusion; //group.name
                groupSelect.appendChild(option); //group.name
            });
        } catch (error) {
            console.error('Error fetching groups:', error);
        }
    }

    /**
     * Fetch channels based on selected group
     * User picks from dropdown
     */
    async function fetchChannels(groupName) {
        try {
            const response = await fetch(`${pythonURI}/api/channels/filter`, {
                ...fetchOptions,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ group_name: flavorFusion }) // (edit) groupName
            });
            if (!response.ok) {
                throw new Error('Failed to fetch channels: ' + response.statusText);
            }
            const channels = await response.json();
            const channelSelect = document.getElementById('channel_id');
            channelSelect.innerHTML = '<option value="">Select a channel</option>'; // Reset channels
            channels.forEach(channel => {
                const option = document.createElement('option');
                option.value = channel.id;
                option.textContent = channel.name;
                channelSelect.appendChild(option);
            });
        } catch (error) {
            console.error('Error fetching channels:', error);
        }
    }

    /**
      * Handle group selection change
      * Channel Dropdown refresh to match group_id change
      */
    document.getElementById('group_id').addEventListener('change', function() {
        const groupName = this.value;
        if (groupName) {
            fetchChannels(flavorFusion); // groupName
        } else {
            document.getElementById('channel_id').innerHTML = '<option value="">Select a channel</option>'; // Reset channels
        }
    });

    /**
     * Handle form submission for selection
     * Select Button: Computer fetches and displays posts
     */
    document.getElementById('selectionForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const groupId = document.getElementById('group_id').value;
        const channelId = document.getElementById('channel_id').value;
        if (groupId && channelId) {
            fetchData(channelId);
        } else {
            alert('Please select both group and channel.');
        }
    });

    /**
     * Handle form submission for adding a post
     * Add Form Button: Computer handles form submission with request
     */
    document.getElementById('postForm').addEventListener('submit', async function(event) {
        event.preventDefault();

        // Extract data from form
        const title = document.getElementById('title').value;
        const comment = document.getElementById('comment').value;
        const channelId = document.getElementById('channel_id').value;

        // Create API payload
        const postData = {
            title: title,
            comment: comment,
            channel_id: channelId
        };

        // Trap errors
        try {
            // Send POST request to backend, purpose is to write to database
            const response = await fetch(`${pythonURI}/api/post`, {
                ...fetchOptions,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });

            if (!response.ok) {
                throw new Error('Failed to add post: ' + response.statusText);
            }

            // Successful post
            const result = await response.json();
            alert('Post added successfully!');
            document.getElementById('postForm').reset();
            fetchData(channelId);
        } catch (error) {
            // Present alert on error from backend
            console.error('Error adding post:', error);
            alert('Error adding post: ' + error.message);
        }
    });

    /**
     * Fetch posts based on selected channel
     * Handle response: Fetch and display posts
     */
    async function fetchData(channelId) {
        try {
            const response = await fetch(`${pythonURI}/api/posts/filter`, {
                ...fetchOptions,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ channel_id: channelId })
            });
            if (!response.ok) {
                throw new Error('Failed to fetch posts: ' + response.statusText);
            }

            // Parse the JSON data
            const postData = await response.json();

            // Extract posts count
            const postCount = postData.length || 0;

            // Update the HTML elements with the data
            document.getElementById('count').innerHTML = `<h2>Count ${postCount}</h2>`;

            // Get the details div
            const detailsDiv = document.getElementById('details');
            detailsDiv.innerHTML = ''; // Clear previous posts

            // Iterate over the postData and create HTML elements for each item
            postData.forEach(postItem => {
                const postElement = document.createElement('div');
                postElement.className = 'post-item';
                postElement.innerHTML = `
                    <h3>${postItem.title}</h3>
                    <p><strong>Channel:</strong> ${postItem.channel_name}</p>
                    <p><strong>User:</strong> ${postItem.user_name}</p>
                    <p>${postItem.comment}</p>
                `;
                detailsDiv.appendChild(postElement);
            });

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Fetch groups when the page loads
    fetchGroups(); 

  s1 = Section(name='Home Page') 
s2 = Section(name='Shared Interest')
s3 = Section(name='Create and Compete')
s4 = Section(name='Vote for the GOAT')
s5 = Section(name='Share and Care')
s6 = Section(name='Rate and Relate')
sections = [s1, s2, s3, s4, s5, s6]

  # Home Page Groups
home_page_section = Section.query.filter_by(_name='Home Page').first()
groups = [
    Group(name='General', section_id=home_page_section.id, moderators=[User.query.get(1)]),
    Group(name='Support', section_id=home_page_section.id, moderators=[User.query.get(1)])
]

// static group data
/* # Rate and Relate Groups 
shared_interest_section = Section.query.filter_by(_name='Rate and Relate').first()
groups += [
    Group(name='Limitless Connections', section_id=shared_interest_section.id, moderators=[User.query.get(1)]),
    Group(name='DNHS Football', section_id=shared_interest_section.id, moderators=[User.query.get(1)]),
    Group(name='School Subjects', section_id=shared_interest_section.id, moderators=[User.query.get(1)]),
    Group(name='Music', section_id=shared_interest_section.id, moderators=[User.query.get(1)]),
    Group(name='Satire', section_id=shared_interest_section.id, moderators=[User.query.get(1)]),
    Group(name='Activity Hub', section_id=shared_interest_section.id, moderators=[User.query.get(1)])
    */

  # Home Page Channels
general = Group.query.filter_by(_name='General').first()
support = Group.query.filter_by(_name='Support').first()
home_page_channels = [
    Channel(name='Announcements', group_id=general.id),
    Channel(name='Events', group_id=general.id),
    Channel(name='FAQ', group_id=support.id),
    Channel(name='Help Desk', group_id=support.id)
]

/*
# Shared Interest Channels 
limitless_connection = Group.query.filter_by(_name='Limitless Connections').first() 
dnhs_football = Group.query.filter_by(_name='DNHS Football').first() 
school_subjects = Group.query.filter_by(_name='School Subjects').first()
music = Group.query.filter_by(_name='Music').first()
satire = Group.query.filter_by(_name='Satire').first()
activity_hub = Group.query.filter_by(_name='Activity Hub').first()
shared_interest_channels = [
    Channel(name='Penpal Letters', group_id=limitless_connection.id),
    Channel(name='Game vs Poway', group_id=dnhs_football.id),
    Channel(name='Game vs Westview', group_id=dnhs_football.id),
    Channel(name='Math', group_id=school_subjects.id),
    Channel(name='English', group_id=school_subjects.id),
    Channel(name='Artist', group_id=music.id),
    Channel(name='Music Genre', group_id=music.id),
    Channel(name='Humor', group_id=satire.id),
    Channel(name='Memes', group_id=satire.id),
    Channel(name='Irony', group_id=satire.id),
    Channel(name='Cyber Patriots', group_id=activity_hub.id),
    Channel(name='Robotics', group_id=activity_hub.id)
]

channels = home_page_channels + shared_interest_channels
*/
]
</script>
