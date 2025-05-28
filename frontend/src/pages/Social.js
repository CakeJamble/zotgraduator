import React from 'react';

const assets = {
  joinVoice: '/images/social-page/join-voice.jpg',
  activityButton: '/images/social-page/activity-button.jpg',
  searchZotGraduator: '/images/social-page/search-zotgraduator.jpg',
  launchActivity: '/images/social-page/launch-activity.jpg',
  inviteFriends: '/images/social-page/invite-friends.jpg',
  collaborate: '/images/social-page/collaborate.png', // placeholder, not present yet
  saveExport: '/images/social-page/save-export.jpg',
};

function Step({ number, title, description, img, children }) {
  return (
    <div
      style={{
        marginBottom: '2rem',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1.5rem',
      }}
    >
      <div style={{ fontSize: '2rem', fontWeight: 'bold', minWidth: 40 }}>
        {number}
      </div>
      <div
        style={{
          flex: 1,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h3 style={{ margin: 0, alignSelf: 'flex-start' }}>{title}</h3>
        <p style={{ margin: '0.5rem 0 1rem 0', alignSelf: 'flex-start' }}>
          {description}
        </p>
        {img && (
          <img
            src={img}
            alt={title}
            style={{
              maxWidth: number === 5 ? 600 : 320,
              width: '100%',
              borderRadius: 8,
              boxShadow: '0 2px 8px #0001',
              marginBottom: children ? 16 : 0,
              marginTop: 8,
              display: 'block',
              objectFit: 'contain',
            }}
          />
        )}
        {children}
      </div>
    </div>
  );
}

function Social() {
  return (
    <div
      style={{
        maxWidth: 700,
        margin: '2rem auto',
        padding: '2rem',
        background: '#fff',
        borderRadius: 12,
        boxShadow: '0 4px 24px #0002',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        How to Use ZotGraduator as a Discord Activity
      </h1>
      <p style={{ textAlign: 'center', color: '#555', marginBottom: '2.5rem' }}>
        Plan your UCI schedule together with friends—right inside Discord!
        Follow these steps to get started with ZotGraduator in a voice channel.
      </p>
      <Step
        number={1}
        title="Join a Voice Channel"
        description="Click on any voice channel in your Discord server to join."
        img={assets.joinVoice}
      />
      <Step
        number={2}
        title="Start ZotGraduator Activity"
        description={
          <>
            Click the <b>Activities</b> button at the bottom of the voice
            channel panel, search for <b>ZotGraduator</b>, and click{' '}
            <b>Launch</b> to start the activity.
          </>
        }
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            marginTop: 8,
          }}
        >
          <div>
            <b>1. Click the Activities button:</b>
            <br />
            <img
              src={assets.activityButton}
              alt="Click Activities"
              style={{
                maxWidth: 320,
                borderRadius: 8,
                boxShadow: '0 2px 8px #0001',
                marginTop: 4,
              }}
            />
          </div>
          <div>
            <b>2. Search for ZotGraduator:</b>
            <br />
            <img
              src={assets.searchZotGraduator}
              alt="Search ZotGraduator"
              style={{
                maxWidth: 320,
                borderRadius: 8,
                boxShadow: '0 2px 8px #0001',
                marginTop: 4,
              }}
            />
          </div>
          <div>
            <b>3. Launch the activity:</b>
            <br />
            <img
              src={assets.launchActivity}
              alt="Launch Activity"
              style={{
                maxWidth: 320,
                borderRadius: 8,
                boxShadow: '0 2px 8px #0001',
                marginTop: 4,
              }}
            />
          </div>
        </div>
      </Step>
      <Step
        number={3}
        title="Invite Friends"
        description="Share the invite link with friends in the channel so they can join the session."
        img={assets.inviteFriends}
      />
      <Step
        number={4}
        title="Collaborate on Your UCI Schedule"
        description={
          <>
            Everyone in the activity can view, edit, and optimize the course
            plan together.
            <br />
            <ul style={{ margin: '0.5rem 0 0 1.5rem' }}>
              <li>Add courses and visualize prerequisites</li>
              <li>Use the optimizer to find the best schedule</li>
              <li>Chat and plan in real time</li>
            </ul>
          </>
        }
        img={undefined}
      />
      <Step
        number={5}
        title="Save or Export Your Plan"
        description="Once you're happy with your schedule, save it to your account or export it for later."
      >
        <img
          src={assets.saveExport}
          alt="Save or Export"
          style={{
            maxWidth: 600,
            width: '100%',
            borderRadius: 8,
            boxShadow: '0 2px 8px #0001',
            marginTop: 12,
            marginBottom: 0,
            display: 'block',
          }}
        />
      </Step>
      <div style={{ marginTop: '2.5rem', textAlign: 'center', color: '#666' }}>
        <b>Need help?</b> Visit our Support page or ask in your Discord server’s
        #help channel.
        <br />
        <br />
        <span style={{ fontSize: '1.1rem' }}>
          Ready to get started? Jump into a voice channel and launch
          ZotGraduator!
        </span>
      </div>
    </div>
  );
}

export default Social;
